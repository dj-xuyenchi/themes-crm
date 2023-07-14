import { List } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/buttons/buttons';

import teamData from '../../../../demoData/teamMembers.json';

function TeamList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const team = teamData.slice(0, 5);
    if (!unmounted) {
      setData(team);
    }

    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, []);

  const handleActive = (e) => {
    e.currentTarget.classList.toggle('active');
  };

  return (
    <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative h-full">
      <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] flex flex-wrap items-center justify-between sm:flex-col sm:h-auto sm:mb-[15px]">
        <h1 className="mb-0 inline-flex items-center py-[18px] sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
          Team members
        </h1>
      </div>
      <div className="px-[25px] pb-[25px]">
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item className="p-0 last:mb-0 mb-[20px] border-none" key={item.email}>
              <List.Item.Meta
                className="border-none p-0 items-center"
                avatar={
                  <img
                    className="max-w-[34px] rounded-[5px]"
                    src={require(`../../../../${item.img}`)}
                    alt="hexadash Team"
                  />
                }
                title={
                  <Link className="text-theme-gray text-[15px] dark:text-white60 font-medium leading-[19px]" to="#">
                    {item.name}
                  </Link>
                }
                description={
                  <div
                    className="text-[12px] text-theme-gray dark:text-white60 leading-[1] relative ltr:pl-[12px] rtl:pr-[12px] before:absolute ltr:before:left-0 rtl:before:right-0 before:top-[50%] before:transform before:-translate-y-1/2 before:rounded-full before:content-[''] before:bg-success before:w-[6px] before:h-[6px] mt-[-4px]"
                    to="#"
                  >
                    online
                  </div>
                }
              />
              <Button
                onClick={handleActive}
                type="primary"
                className="text-primary bg-primary/[.07] text-[13px] font-semibold px-12px hover:text-white hover:bg-primary transition duration-300 border-none"
              >
                Add
              </Button>
            </List.Item>
          )}
          className="[&>div>div>ul]:p-0 [&>div>div>ul]:pt-[4px]"
        />
      </div>
    </div>
  );
}

export default TeamList;
