import React from 'react';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import socialMediaLinks from '../../../demoData/socialMediaLinks.json';
import { Dropdown } from '../../../components/dropdown/dropdown';

function TeamCard({ user, actions }) {
  const { name, designation, img } = user;

  return (
    <>
      <div className="relative bg-white dark:bg-white10 p-[25px] rounded-[10px] shadow-[0_5px_20px_rgba(173,181,217,0.01)] text-center">
        <figure className="mb-0">
          <img
            className="mb-[20px] w-full rounded-full max-w-[150px] inline-block"
            src={require(`../../../${img}`)}
            alt=""
          />
          <figcaption>
            <div className="absolute py-1 dark:bg-transparent ltr:right-[24px] rtl:left-[24px] top-[20px] leading-[0.5] rounded-10 text-light-extra dark:text-white60">
              <Dropdown content={actions} action={['click']}>
                <Link className="text-light-extra dark:text-white60 " to="#">
                  <UilEllipsisH className="w-[20px] h-[20px] " />
                </Link>
              </Dropdown>
            </div>
            <h6 className="text-[16px] mb-6px font-medium text-dark dark:text-white60">
              <Link className="text-current" to="#">
                {name}
              </Link>
            </h6>
            <span className="text-[13px] mb-[25px] text-light dark:text-white60">{designation}</span>
            <div className="flex flex-wrap items-center justify-center mt-[16px] gap-[10px]">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.id}
                  className={`w-[38px] h-[38px] rounded-full inline-flex items-center justify-center bg-white dark:bg-white10 shadow-[0_10px_20px_rgba(116,116,116,0.08)] btn-icon text-${link.icon}`}
                  href={`https://${link.name.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesome className="text-current" name={link.icon} />
                </a>
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

TeamCard.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.node,
};

export default TeamCard;
