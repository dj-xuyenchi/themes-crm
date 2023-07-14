/* eslint-disable react/prop-types */
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilExpandArrows from '@iconscout/react-unicons/icons/uil-expand-arrows';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { noteDeleteData, onLabelUpdate, onStarUpdate } from '../../redux/note/actionCreator';
import { Dropdown } from '../dropdown/dropdown';

function NoteCard({ data, listeners, setNodeRef }) {
  const dispatch = useDispatch();
  const { noteData } = useSelector((state) => {
    return {
      noteData: state.Note.data,
    };
  });
  const { title, key, description, stared, label } = data;
  const onLabelChange = (labels) => {
    dispatch(onLabelUpdate(noteData, key, labels));
  };
  const content = (
    <>
      <div className="bg-white dark:bg-[#1b1e2b] py-1 shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
        <ul className="mb-0">
          <li>
            <Link
              onClick={() => onLabelChange('personal')}
              to="#"
              className="inline-flex items-center w-full px-4 py-2 rounded bg-transparent hover:bg-[#f2eafb] hover:[&>span]:text-primary"
            >
              <span className="flex items-center gap-2.5 text-sm text-body dark:text-white60 leading-none">
                <span className="bg-primary w-2.5 h-2.5 rounded-full" />
                Personal
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => onLabelChange('work')}
              to="#"
              className="inline-flex items-center w-full px-4 py-2 rounded bg-transparent hover:bg-[#f2eafb] hover:[&>span]:text-primary"
            >
              <span className="flex items-center gap-2.5 text-sm text-body dark:text-white60 leading-none">
                <span className="bg-success w-2.5 h-2.5 rounded-full" /> Work
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => onLabelChange('social')}
              to="#"
              className="inline-flex items-center w-full px-4 py-2 rounded bg-transparent hover:bg-[#f2eafb] hover:[&>span]:text-primary"
            >
              <span className="flex items-center gap-2.5 text-sm text-body dark:text-white60 leading-none">
                <span className="bg-warning w-2.5 h-2.5 rounded-full" /> Social
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => onLabelChange('important')}
              to="#"
              className="inline-flex items-center w-full px-4 py-2 rounded bg-transparent hover:bg-[#f2eafb] hover:[&>span]:text-primary"
            >
              <span className="flex items-center gap-2.5 text-sm text-body dark:text-white60 leading-none">
                <span className="bg-info w-2.5 h-2.5 rounded-full" /> Important
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
  const onHandleDelete = () => {
    const value = noteData.filter((item) => item.key !== key);
    dispatch(noteDeleteData(value));
  };
  return (
    <div
      className={`bg-${
        label === 'personal'
          ? 'primary'
          : label === 'work'
          ? 'success'
          : label === 'social'
          ? 'warning'
          : label === 'important'
          ? 'info'
          : 'dark'
      }-transparent hover:backdrop-brightness-95 py-5 px-[25px] mb-[25px] rounded-[15px] text-body transition-all duration-300 ease-in-out`}
    >
      <h4 className="flex items-start justify-between gap-2.5 text-base mb-4 text-dark dark:text-white">
        <span>
          {title}
          <span
            className={`inline-block w-[7px] h-[7px] rounded-full ltr:ml-2 rtl:mr-2 bg-${
              label === 'personal'
                ? 'primary'
                : label === 'work'
                ? 'success'
                : label === 'social'
                ? 'warning'
                : label === 'important'
                ? 'info'
                : 'dark'
            }`}
          />
        </span>
        <div ref={setNodeRef} {...listeners}>
          <UilExpandArrows className="w-4 h-4 text-body dark:text-white60 cursor-move" />
        </div>
      </h4>
      <p className="text-body dark:text-white60 mb-0">{description}</p>
      <div className="flex items-center justify-between mt-[18px]">
        <span className="flex items-center gap-[5px]">
          <Link onClick={() => dispatch(onStarUpdate(noteData, key))} to="#">
            <UilStar className={`w-4 h-4 ${stared ? 'text-warning' : 'text-body'}`} />
          </Link>
          <Link onClick={() => onHandleDelete()} to="#">
            <UilTrashAlt className="w-4 h-4 text-body dark:text-white60" />
          </Link>
        </span>
        <Dropdown content={content}>
          <Link to="#">
            <UilEllipsisV className="w-4 h-4 text-body dark:text-white60" />
          </Link>
        </Dropdown>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  data: PropTypes.object,
};
export default NoteCard;
