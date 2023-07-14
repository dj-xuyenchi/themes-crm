/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { BackShadow, CreatePost } from './style';
import { Button } from '../../../../../components/buttons/buttons';
import { submitPost } from '../../../../../redux/profile/actionCreator';

function Post() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => {
    return {
      posts: state.Profile.posts,
    };
  });

  const [drawer, setDrawer] = useState(false);
  const [textValue, setTextValue] = useState('');

  const onCreate = () => {
    const arrayData = [];
    posts.map((data) => {
      return arrayData.push(data.postId);
    });
    const max = Math.max(...arrayData);
    if (textValue === '') {
      alert('Please input minumum content');
    } else {
      dispatch(
        submitPost([
          ...posts,
          {
            postId: max + 1,
            from: 'David Warner',
            time: new Date().getTime(),
            img: ['static/img/profile/post/postImage.png'],
            author: 'static/img/chat-author/t4.jpg',
            content: textValue,
            like: 0,
            comment: [],
          },
        ]),
      );
      setTextValue('');
    }
    setTimeout(() => {
      setDrawer(false);
    }, 500);
  };

  const onTextChange = (e) => {
    return setTextValue(e.target.value);
  };

  return (
    <CreatePost>
      {drawer && (
        <BackShadow
          className="after:content-[''] after:w-full after:h-full after:left-0 after:top-0 after:bg-black after:opacity-70 after:fixed"
          onClick={() => setDrawer(false)}
        />
      )}
      <div className="bg-white dark:bg-white10 rounded-10 mb-[25px] relative">
        <div className="h-[60px] px-[25px] border-regular dark:border-white10 border-b-1 text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between">
          <div className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
            Post Something
          </div>
        </div>

        <div className="pt-[20px] px-[25px] pb-[15px]">
          <div onClick={() => setDrawer(true)} className="relative flex postBody">
            <img
              className="max-w-[46px] max-h-[46px] min-w-[46px] h-[46px] rounded-full absolute top-[5px] z-[22] ltr:left-0 rtl:right-0 object-cover"
              src={require('../../../../../static/img/chat-author/t4.jpg')}
              alt=""
            />
            <Input.TextArea
              className="border-none ltr:pl-[70px] rtl:pr-[70px] resize-none bg-transparent dark:bg-transparent text-dark dark:text-white87 outline-none shadow-none"
              value={textValue}
              onChange={onTextChange}
              placeholder="Write something..."
            />
          </div>
          <div
            onClick={() => setDrawer(true)}
            className="flex items-center justify-between mt-[10px] border-t-1 dark:border-white10 pt-[15px] postFooter"
          >
            <div className="flex items-center gap-[16px]">
              <Button className="flex items-center h-[30px] px-[14.5px] text-[12px] rounded-[16px] font-medium text-theme-gray dark:text-white60 bg-normalBG dark:bg-normalBGdark border-none outline-none gap-[6px] leading-[18px]">
                <img className="w-[14] h-[14px]" src={require('../../../../../static/img/icon/image.png')} alt="" />
                Photo/Video
              </Button>
              <Button
                className="flex items-center h-[30px] px-[14.5px] text-[12px] rounded-[16px] font-medium text-theme-gray dark:text-white60 bg-normalBG dark:bg-normalBGdark border-none outline-none gap-[6px]"
                shape="circle"
                type="light"
              >
                <UilEllipsisH className="w-[14px] h-[14px]" />
              </Button>
            </div>
            <div className="postFooter_right">
              {drawer && (
                <Button
                  className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-5 h-[35px]"
                  onClick={onCreate}
                  type="primary"
                >
                  Publish Post
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </CreatePost>
  );
}

export default Post;
