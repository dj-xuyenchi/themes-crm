/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import UilExclamationCircle from '@iconscout/react-unicons/icons/uil-exclamation-circle';
import RichTextEditor from 'react-rte';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Upload, message } from 'antd';
import { Button } from '../../../components/buttons/buttons';

function MailComposer({ onChange, onSend, defaultTag, replay, text }) {
  const [state, setState] = useState({
    value: RichTextEditor.createEmptyValue(),
    tags: defaultTag ? [defaultTag] : [],
  });

  const onChanges = (value) => {
    setState({ ...state, value });
    if (onChange) {
      onChange(value.toString('html'));
    }
  };

  const handleChange = (tags) => {
    setState({ ...state, tags });
  };

  const onSubmit = () => {
    onSend && onSend(state.value.toString('html'));
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="static bg-white dark:bg-[#1b1d2a] rounded-10 shadow-[0_10px_50px_rgba(146,153,184,.19)] dark:shadow-none z-998">
      {!text && (
        <div className="flex items-center justify-between relative px-[30px] ssm:px-[15px]">
          <div className="relative flex items-center gap-2.5 w-full border-b border-regular dark:border-white10">
            {!replay ? null : <span className="text-light dark:text-white87">Replay To</span>}
            <TagsInput
              inputProps={{
                placeholder: replay ? null : 'To',
              }}
              value={state.tags}
              onChange={handleChange}
              className="py-2 text-light dark:text-white87 [&>span>input]:placeholder:text-light dark:[&>span>input]:placeholder:text-white60 [&>span]:flex [&>span>.react-tagsinput-tag]:flex [&>span>.react-tagsinput-tag]:bg-section dark:[&>span>.react-tagsinput-tag]:bg-white10 [&>span>.react-tagsinput-tag]:gap-2 [&>span>.react-tagsinput-tag]:border-none [&>span>.react-tagsinput-tag]:py-[5px] [&>span>.react-tagsinput-tag]:px-4 [&>span>.react-tagsinput-tag]:text-body dark:[&>span>.react-tagsinput-tag]:text-white87 [&>span>.react-tagsinput-tag]:rounded-[16px] [&>span>.react-tagsinput-tag>a]:text-light dark:[&>span>.react-tagsinput-tag>a]:text-white60"
            />
          </div>
          <span className="absolute ltr:right-[30px] rtl:left-[30px] top-1/2 -translate-y-1/2 text-light dark:text-white87">
            Cc
          </span>
        </div>
      )}
      <div className="relative px-[30px] ssm:px-[15px]">
        <RichTextEditor
          placeholder="Type your message..."
          value={state.value}
          onChange={onChanges}
          className="bg-white dark:bg-[#1b1d2a] min-md:min-h-[400px] md:min-h-[200px] border-none [&>div]:border-regular dark:[&>div]:border-white10 [&>div>.DraftEditor-root]:font-Jost [&>div>.DraftEditor-root]:text-sm [&>div>div>div>button]:bg-none [&>div>div>div>button]:border-none [&>div>div>div>button]:py-0 [&>div>div>span>span]:border-none [&>div>div>.public-DraftEditorPlaceholder-root]:pt-5 [&>div>div>div>.public-DraftEditor-content]:pt-5 [&>div>div>div>.public-DraftEditor-content]:text-sm [&>div>div>div>.public-DraftEditor-content]:text-dark dark:[&>div>div>div>.public-DraftEditor-content]:text-white87 [&>div>div>div>.public-DraftEditor-content]:font-medium"
        />
      </div>
      {!text && (
        <div className="flex items-center justify-between mx-[30px] pt-[20px] pb-[30px] border-t border-regular dark:border-white10">
          <div className="flex items-center">
            <Button
              size="default"
              type="primary"
              className="h-[44px] ltr:mr-[10px] rtl:ml-[10px] px-[20px]"
              onClick={onSubmit}
              raised
            >
              Send
            </Button>
            <Link to="#">
              <Upload
                {...props}
                className="flex items-center [&>div.ant-upload-list]:absolute [&>div.ant-upload-list]:w-[95%] [&>div.ant-upload-list]:left-[25px] [&>div.ant-upload-list]:bottom-[15%] [&>div.ant-upload-list]:m-0 [&>div>div>.ant-upload-list-item]:bg-section dark:[&>div.ant-upload-list]:m-0 [&>div>div>.ant-upload-list-item]:bg-white10 [&>div>div>.ant-upload-list-item]:px-2.5 [&>div>div>.ant-upload-list-item]:py-[15px] [&>div>div>.ant-upload-list-item]:rounded-[10px] [&>div>div>.ant-upload-list-item]:my-[2.5] [&>div>div>div>div>span>.ant-upload-text-icon]:flex [&>div>div>div>div>span>div>.anticon]:text-body [&>div>div>div>div>span>span>button]:m-0 [&>div>div>div>div>span>span>button>.anticon]:text-body dark:text-white60"
              >
                <UilPaperclip className="w-[15px] h-[15px] ltr:ml-[10px] rtl:mr-[10px] text-light dark:text-white60" />
              </Upload>
            </Link>
            <Link to="#">
              <UilExclamationCircle className="w-[15px] h-[15px] ltr:ml-[10px] rtl:mr-[10px] text-light dark:text-white60" />
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="#">
              <UilTrashAlt className="w-[18px] h-[18px]ltr:ml-[10px] rtl:mr-[10px] text-light dark:text-white60" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

MailComposer.propTypes = {
  onChange: propTypes.func,
  onSend: propTypes.func,
  defaultTag: propTypes.string,
  replay: propTypes.bool,
  text: propTypes.bool,
};

export default MailComposer;
