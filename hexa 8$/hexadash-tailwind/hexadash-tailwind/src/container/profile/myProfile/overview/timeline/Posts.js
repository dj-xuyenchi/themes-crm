/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import UilThumbsUp from '@iconscout/react-unicons/icons/uil-thumbs-up';
import UilCommentAlt from '@iconscout/react-unicons/icons/uil-comment-alt';
import UilShareAlt from '@iconscout/react-unicons/icons/uil-share-alt';
import UilSmile from '@iconscout/react-unicons/icons/uil-smile';
import UilImage from '@iconscout/react-unicons/icons/uil-image';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Input, Upload, message, Comment, Avatar } from 'antd';
import Picker from 'emoji-picker-react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { LightBox } from 'react-lightbox-pack';
import 'react-lightbox-pack/dist/index.css';
import { AllPosts, BackShadowEmoji, Title } from './style';
import { Cards } from '../../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../../components/buttons/buttons';
import { likeUpdate, commentUpdate, postDelete } from '../../../../../redux/profile/actionCreator';

function ExampleComment({ children, replay }) {
  return (
    <Comment
      actions={[
        <span
          className="relative block com-like ltr:pr-[8px] rtl:pl-8 ltr:mr-[8px] rtl:ml-[8px] text-light-extra dark:text-white60 hover:text-primary after:absolute after:right-0  after:top-[50%] after:translate-y-[-50%] after:w-[1px] after:h-[12px] after:bg-deep dark:after:bg-white10 after:content-['']"
          key="comment-nested-reply-to"
        >
          Like{' '}
        </span>,
        <span
          className="relative block com-like ltr:pr-[8px] rtl:pl-8 ltr:mr-[8px] rtl:ml-[8px] text-light-extra dark:text-white60 hover:text-primary after:absolute after:right-0  after:top-[50%] after:translate-y-[-50%] after:w-[1px] after:h-[12px] after:bg-deep dark:after:bg-white10 after:content-['']"
          key="comment-nested-reply-to"
        >
          Reply{' '}
        </span>,
        <span
          className="block ltr:mr-0 rtl:ml-0 com-time text-light-extra dark:text-white60 hover:text-primary"
          key="comment-nested-reply-to"
        >
          {moment(parseInt(replay.time, 10)).fromNow()}
        </span>,
      ]}
      author={<span className="text-dark dark:text-white87 text-[14px] font-semibold">{replay.name}</span>}
      avatar={
        <Avatar
          className="rounded-full w-[32px] h-[32px]"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={<p className="text-light dark:text-white60">{replay.text}</p>}
    >
      {children}
    </Comment>
  );
}

ExampleComment.propTypes = {
  children: PropTypes.node,
  replay: PropTypes.object,
};

function Posts({ postId, from, time, img, like, comment, content, author }) {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => {
    return {
      posts: state.Profile.posts,
    };
  });

  const [state, setState] = useState({
    inputValue: '',
    fileList: [],
    fileList2: [],
  });

  const [pickerShow, setPickerShow] = useState(false);
  const [textValue, setTextValue] = useState('');

  const onEmojiClick = (event, emojiObject) => {
    setTextValue(textValue + emojiObject.emoji);
  };

  const onPickerShow = () => {
    setPickerShow(!pickerShow);
  };

  const onTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    listType: 'picture-card',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
        setState({
          ...state,
          fileList: info.fileList,
        });
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const attachment = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
        setState({
          ...state,
          fileList2: info.fileList,
        });
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onLikeUpdate = (id) => {
    return dispatch(likeUpdate(posts, id));
  };

  const onCommentUpdate = (id) => {
    dispatch(commentUpdate(posts, id, textValue));
    setTextValue('');
  };

  const onPostDelete = (id) => {
    dispatch(postDelete(posts, id));
  };

  // State
  const [toggle, setToggle] = React.useState(false);
  const [sIndex, setSIndex] = React.useState(0);

  // Handler
  const lightBoxHandler = (status, value) => {
    setToggle(status);
    setSIndex(value);
  };

  // const lbPrefix = '../../../../../';
  // const lbImages = img.map((src, index) => {
  //   return { image: lbPrefix + src, id: index };
  // });

  const dataImages = [
    {
      id: 1,
      image: require('../../../../../static/img/profile/post/506.png'),
    },
    {
      id: 2,
      image: require('../../../../../static/img/profile/post/907.png'),
    },
    {
      id: 3,
      image: require('../../../../../static/img/profile/post/brightland_3744.png'),
    },
    {
      id: 4,
      image: require('../../../../../static/img/profile/post/70.png'),
    },
    {
      id: 5,
      image: require('../../../../../static/img/profile/post/165.png'),
    },
  ];

  return (
    <AllPosts>
      <Cards
        className="rounded-10 [&>.ant-card-head]:px-[25px] [&>.ant-card-body]:py-[20px] [&>.ant-card-body]:px-0 mb-[25px] [&>div>.ant-card-head-wrapper]:flex-row"
        title={
          <Title className="flex items-center gap-[15px] ">
            <img className="w-[46px] h-[46px] rounded-full" src={require(`../../../../../${author}`)} alt="" />
            <p className="text-[14px] font-medium text-dark dark:text-white87 m-0">
              {from}{' '}
              <span className="text-[13px] font-normal block m-0 text-light dark:text-white60 text-start">
                {moment(parseInt(time, 10)).fromNow()}
              </span>
            </p>
          </Title>
        }
        more={
          <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
            <Link
              className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm"
              onClick={() => onPostDelete(postId)}
              to="#"
            >
              Delete
            </Link>
          </div>
        }
      >
        <div>
          <div className="gallery px-[25px]">
            {img.length ? (
              <>
                <Masonry
                  breakpointCols={img.length <= 2 ? img.length : 2}
                  className="my-masonry-grid flex w-auto gap-[10px]"
                  columnClassName="my-masonry-grid_column bg-clip-padding"
                >
                  {img.map((src, key) => {
                    return (
                      key <= 1 && (
                        <a
                          href="#"
                          onClick={() => {
                            lightBoxHandler(true, key);
                          }}
                        >
                          <img
                            className="mb-[10px] rounded-[8px] w-full"
                            key={key + 1}
                            src={require(`../../../../../${src}`)}
                            alt=""
                          />
                        </a>
                      )
                    );
                  })}
                </Masonry>
                {img.length > 2 && (
                  <Masonry
                    breakpointCols={img.length <= 2 ? img.length : 3}
                    className="my-masonry-grid flex w-auto gap-[10px]"
                    columnClassName="my-masonry-grid_column bg-clip-padding"
                  >
                    {img.map((src, key) => {
                      return (
                        key > 1 && (
                          <a
                            key={key + 1}
                            href="#"
                            onClick={() => {
                              lightBoxHandler(true, key);
                            }}
                          >
                            <img
                              className="mb-[10px] rounded-[8px] w-full"
                              key={key + 1}
                              src={require(`../../../../../${src}`)}
                              alt=""
                            />
                          </a>
                        )
                      );
                    })}
                  </Masonry>
                )}
              </>
            ) : null}
            <LightBox
              state={toggle}
              event={lightBoxHandler}
              data={dataImages}
              imageWidth="600px"
              imageHeight="500px"
              thumbnailHeight={50}
              thumbnailWidth={50}
              setImageIndex={setSIndex}
              imageIndex={sIndex}
            />
          </div>
          <div className="border-b-1 dark:border-white10 px-[25px] pb-[20px] mb-[20px]">
            <p className="text-[15px] mb-0 text-theme-gray dark:text-white60">{content}</p>
          </div>

          <div className="px-[25px] pb-[20px] border-b-1 dark:border-white10 mb-[20px] flex flex-wrap items-center gap-[20px]">
            <span className="inline-flex items-center text-light-extra dark:text-white60 gap-[6px]">
              <Link
                className="inline-flex items-center text-[13px] text-light-extra dark:text-white60 hover:text-primary"
                onClick={() => onLikeUpdate(postId)}
                to="#"
              >
                <UilThumbsUp className="w-[14px] h-[14px]" />
              </Link>
              {like}
            </span>
            <span className="inline-flex items-center text-light-extra dark:text-white60 gap-[6px]">
              <Link
                className="inline-flex items-center text-[13px] text-light-extra dark:text-white60 hover:text-primary"
                to="#"
              >
                <UilCommentAlt className="w-[14px] h-[14px]" />
              </Link>
              {comment.length}
            </span>
            <span className="inline-flex items-center text-light-extra dark:text-white60 gap-[6px]">
              <Link
                className="inline-flex items-center text-[13px] text-light-extra dark:text-white60 hover:text-primary gap-[6px]"
                to="#"
              >
                <UilShareAlt className="w-[14px] h-[14px]" />
                Share
              </Link>
            </span>
          </div>

          <div>
            <div className="flex items-center sm:flex-wrap px-[25px] pb-[20px] border-b-1 dark:border-white10 gap-[10px]">
              <div className="relative flex items-center sm:flex-wrap flex-1 sm:flex-[0_0_100%] gap-[10px]">
                <img
                  className="max-w-[36px] rounded-full"
                  src={require('../../../../../static/img/chat-author/t2.jpg')}
                  alt=""
                />
                <Input.TextArea
                  className="py-[14px] ltr:pr-[82px] rtl:pl-[82px] ltr:pl-[22px] rtl:pr-[22px] h-[52px] border-none rounded-[25px] resize-none bg-normalBG dark:bg-normalBGdark text-dark dark:text-white87"
                  onChange={onTextChange}
                  value={textValue}
                  placeholder="Write comment...."
                />
                <div className="social-post flex items-center ltr:right-[22px] rtl:left-[22px] top-[50%] sm:top-[70%] -translate-y-1/2 absolute gap-[10px]">
                  <span className="relative gap-[18px]">
                    {pickerShow && (
                      <>
                        <BackShadowEmoji onClick={() => setPickerShow(false)} />
                        <Picker onEmojiClick={onEmojiClick} />
                      </>
                    )}
                    <Link className="leading-[1]" onClick={onPickerShow} to="#">
                      <UilSmile className="w-[18px] h-[18px] text-[#adb4d2] dark:text-white60" />
                    </Link>
                  </span>

                  <Link
                    className="leading-[1] flex items-center [&>span>div>.ant-upload]:w-auto [&>span>div>.ant-upload]:h-auto [&>span>div>.ant-upload]:border-none [&>span>div>.ant-upload]:m-0 [&>span>div]:flex"
                    to="#"
                  >
                    <Upload {...props}>
                      <UilImage className="w-[18px] h-[18px] text-[#adb4d2] dark:text-white60  dark:bg-[#323440]" />
                    </Upload>
                  </Link>
                  <Link className="leading-[1] flex items-center [&>span>div]:flex" to="#">
                    <Upload {...attachment}>
                      <UilPaperclip className="w-[18px] h-[18px] text-[#adb4d2] dark:text-white60" />
                    </Upload>
                  </Link>
                </div>
              </div>
              <Button
                className="p-0 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-btn bg-primary text-white dark:text-white87 "
                onClick={() => (textValue === '' ? alert('Please input your comment...') : onCommentUpdate(postId))}
                type="primary"
              >
                <UilMessage className="w-[16px] h-[16px] text-white dark:text-white87 " />
              </Button>
            </div>
          </div>

          {comment.length ? (
            <div className=" pt-[20px] px-[25px] [&>div>div]:p-0">
              <ExampleComment
                replay={{
                  time: comment[0].time,
                  name: comment[0].from,
                  text: comment[0].text,
                }}
              >
                {comment.length > 1
                  ? comment.map((item, key) => {
                      return (
                        key >= 1 && (
                          <ExampleComment
                            replay={{
                              time: item.time,
                              name: item.name,
                              text: item.text,
                            }}
                          />
                        )
                      );
                    })
                  : null}
              </ExampleComment>
            </div>
          ) : null}
        </div>
      </Cards>
    </AllPosts>
  );
}

Posts.propTypes = {
  postId: PropTypes.number,
  from: PropTypes.string,
  time: PropTypes.string,
  img: PropTypes.array,
  like: PropTypes.number,
  comment: PropTypes.array,
  content: PropTypes.string,
  author: PropTypes.string,
};

export default Posts;
