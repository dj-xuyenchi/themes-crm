import React from 'react';

import Heading from '../../components/heading/heading';

function Maintenance() {
  return (
    <main className="min-h-[715px] lg:min-h-[580px]">
      <div className="flex justify-center items-center flex-col min-h-screen px-[15px] text-center">
        <img
          className="mx-auto mb-[72px]"
          src={require(`../../static/img/pages/maintenance.svg`).default}
          alt="maintenance"
        />
        <Heading as="h3" className="text-dark dark:text-white87 mb-3.5 text-lg font-medium">
          We are currently performing maintenance
        </Heading>
        <p className="text-body dark:text-white60 mb-0 text-15">
          We&rsquo;re making the system more awesome. <br />
          We&rsquo;ll be back shortly.
        </p>
      </div>
    </main>
  );
}

export default Maintenance;
