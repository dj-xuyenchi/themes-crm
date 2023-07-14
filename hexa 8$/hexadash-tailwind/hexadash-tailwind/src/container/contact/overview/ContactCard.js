import React from 'react';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilMapMarker from '@iconscout/react-unicons/icons/uil-map-marker';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { contactDeleteData } from '../../../redux/contact/actionCreator';
import { Button } from '../../../components/buttons/buttons';

function ContactCard({ user, showEditModal }) {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return {
      users: state.Contact.data,
    };
  });
  const { id, name, designation, img, email, phone, company } = user;

  const onHandleDelete = () => {
    const value = users.filter((item) => item.id !== id);
    dispatch(contactDeleteData(value));
  };

  return (
    <div className="bg-white dark:bg-white10 shadow-[0_5px_20px_rgba(173,181,217,0.01)] p-[25px] rounded-10 relative">
      <figure className="m-0 text-center">
        <img className="inline-block rounded-full w-[120px] h-[120px]" src={require(`../../../${img}`)} alt="" />
        <figcaption className="mt-[20px]">
          <h3 className="text-[18px] font-semibold mb-0 text-dark dark:text-white87">{name}</h3>
          <span className="text-theme-gray dark:text-white60">{designation}</span>
        </figcaption>
      </figure>
      <div className="mt-[20px] dark:border-white10 border-t-1 pt-[25px]">
        <ul className="flex flex-col flex-wrap gap-[14px]">
          <li className="flex items-center text-light dark:text-white60 gap-[12px]">
            <UilPhone className="w-[16px] h-[16px]" />
            {phone}
          </li>
          <li className="flex items-center text-light dark:text-white60 gap-[12px]">
            <UilEnvelope className="w-[16px] h-[16px]" />
            {email}
          </li>
          <li className="flex items-center text-light dark:text-white60 gap-[12px]">
            <UilMapMarker className="w-[16px] h-[16px]" />
            {company}
          </li>
        </ul>
      </div>
      <Dropdown
        className="bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4"
        content={
          <>
            <Link
              className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
              onClick={() => showEditModal(user, id)}
              to="#"
            >
              <span>Edit</span>
            </Link>
            <Link
              className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
              onClick={() => onHandleDelete(id)}
              to="#"
            >
              <span>Delete</span>
            </Link>
          </>
        }
        action={['click']}
      >
        <Button
          className="absolute top-[16px] bg-transparent border-none text-light-extra dark:text-white60 ltr:right-[26px] rtl:left-[26px] min-w-[30px] min-h-[30px] inline-flex items-center justify-center"
          type="light"
          to="#"
          shape="circle"
          onClick={(e) => e.preventDefault()}
        >
          <UilEllipsisH className="w-[24px] h-[24px] m-0" />
        </Button>
      </Dropdown>
    </div>
  );
}

ContactCard.propTypes = {
  user: PropTypes.object,
  showEditModal: PropTypes.func,
};

export default ContactCard;
