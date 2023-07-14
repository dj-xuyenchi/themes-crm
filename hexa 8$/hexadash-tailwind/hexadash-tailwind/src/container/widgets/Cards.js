import React from 'react';
import { Row, Col } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TeamCard from '../pages/overview/TeamCard';
import UserCards from '../pages/overview/UserCard';
import { PageHeader } from '../../components/page-headers/page-headers';

import GridCard from '../project/overview/GridCard';
import ProductCards from '../ecommerce/product/overview/ProductCards';
import ProductCardsList from '../ecommerce/product/overview/ProductCardList';
import GalleryCards from '../pages/overview/GalleryCard';
import ContactCard from '../contact/overview/ContactCard';
import BlogCard from '../../components/cards/BlogCard';
import SampleCardTwo from '../../components/cards/sampleCard/SampleCardTwo';
import SampleCardOne from '../../components/cards/sampleCard/SampleCardOne';
import SampleCardThree from '../../components/cards/sampleCard/SampleCardThree';
import SampleCardFour from '../../components/cards/sampleCard/SampleCardFour';
import SampleCardFive from '../../components/cards/sampleCard/SampleCardFive';
import SampleCardSix from '../../components/cards/sampleCard/SampleCardSix';
import SampleCardSeven from '../../components/cards/sampleCard/SampleCardSeven';
import cardData from '../../demoData/sampleCards.json';
import BannerCard from '../../components/cards/BannerCard';
import FileListCard from '../project/overview/FileListCard';

const { cardOne, cardTwo, cardThree, cardFive, cardSix, cardSeven, BlogCardData } = cardData;
const actions = (
  <>
    <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
      <Link
        className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
        to="#"
      >
        <UilEye className="group-hover:text-primary" />
        <span>View</span>
      </Link>
      <Link
        className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
        to="#"
      >
        <UilEdit className="group-hover:text-primary" />
        <span>Edit</span>
      </Link>
      <Link
        className="group flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary px-3 py-1.5 text-sm gap-[10px] [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-light-extra dark:[&>svg]:text-white60"
        to="#"
      >
        <UilTrashAlt className="group-hover:text-primary" />
        <span>Delete</span>
      </Link>
    </div>
  </>
);

function WidgetsCard() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Widgets Cards',
    },
  ];
  const { products, projects, users, team, gallery, contactUsers } = useSelector((state) => {
    return {
      products: state.products.data,
      projects: state.projects.data,
      users: state.users,
      team: state.team.data,
      gallery: state.gallery.data,
      contactUsers: state.Contact.data,
    };
  });
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Widgets Cards"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          {projects.map((project) => {
            return (
              project.id <= 3 && (
                <Col key={project.id} lg={8} xs={24} className="mb-[25px]">
                  <GridCard value={project} />
                </Col>
              )
            );
          })}

          {users.map((user) => {
            return (
              user.id <= 4 && (
                <Col key={user.id} xxl={6} md={12} sm={12} xs={24} className="mb-[25px]">
                  <UserCards user={user} />
                </Col>
              )
            );
          })}

          {products.map((product, index) => {
            return (
              index <= 3 && (
                <Col key={product.id} xxl={6} sm={12} xs={24}>
                  <ProductCards product={product} />
                </Col>
              )
            );
          })}

          {team.map((member) => {
            return (
              member.id <= 4 && (
                <Col key={member.id} xxl={6} md={12} sm={12} xs={24} className="mb-[25px]">
                  <TeamCard actions={actions} user={member} />
                </Col>
              )
            );
          })}

          {gallery.map((item) => {
            return (
              item.id <= 4 && (
                <Col key={item.id} xxl={6} md={12} sm={12} xs={24}>
                  <GalleryCards actions={actions} item={item} />
                </Col>
              )
            );
          })}

          {contactUsers.map((user) => {
            return (
              user.id <= 4 && (
                <Col key={user.id} xxl={6} md={12} sm={12} xs={24} className="mb-[25px]">
                  <ContactCard user={user} />
                </Col>
              )
            );
          })}

          {cardOne.map((item) => {
            return (
              <Col key={item.id} xxl={6} md={12} sm={12} xs={24} className="mb-[25px]">
                <SampleCardOne item={item} />
              </Col>
            );
          })}

          {cardTwo.map((item) => {
            return (
              <Col key={item.id} xxl={6} md={12} sm={12} xs={24} className="mb-[25px]">
                <SampleCardTwo item={item} />
              </Col>
            );
          })}

          {cardThree.map((item) => {
            return (
              <Col key={item.id} xxl={6} md={12} sm={12} xs={24} className="mb-[25px]">
                <SampleCardThree item={item} />
              </Col>
            );
          })}
          {cardOne.map((item) => {
            return (
              <Col key={item.id} xxl={6} md={12} xs={24} className="mb-[25px]">
                <SampleCardFour item={item} />
              </Col>
            );
          })}

          {BlogCardData.slice(0, 3).map((item) => {
            return (
              <Col key={item.id} xxl={8} md={12} xs={24} className="mb-[25px]">
                <BlogCard item={item} />
              </Col>
            );
          })}

          {cardFive.map((item) => {
            return (
              <Col key={item.id} xxl={6} md={12} xs={24} className="mb-[25px]">
                <SampleCardFive item={item} />
              </Col>
            );
          })}

          {cardSix.map((item) => {
            return (
              <Col key={item.id} xxl={6} md={12} sm={12} xs={24} className="mb-[25px]">
                <SampleCardSix item={item} />
              </Col>
            );
          })}

          {cardSeven.map((item) => {
            return (
              <Col key={item.id} xxl={6} md={12} sm={12} xs={24} className="mb-[25px]">
                <SampleCardSeven item={item} />
              </Col>
            );
          })}

          <Col xs={24} className="mb-[25px]">
            <div className="bg-white dark:bg-white10 shadow-[0_5px_20px_rgba(173,181,217,0.01)] p-[25px] rounded-10 relative">
              <Row gutter="25">
                <Col xxl={8} md={12} className="3xl:mb-[25px]">
                  <BannerCard
                    item={{
                      id: 1,
                      type: 'border',
                      icon: 'layers.svg',
                      title: 'Dark Color',
                      titleColor: 'text-dark',
                      subTitleColor: 'text-gray',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Barbara Marion',
                      authorImg: '10.png',
                    }}
                  />
                </Col>
                <Col xxl={8} md={12} className="3xl:mb-[25px]">
                  <BannerCard
                    item={{
                      id: 2,
                      type: 'border',
                      icon: 'cloud.svg',
                      title: 'Dark Color',
                      titleColor: 'text-dark',
                      subTitleColor: 'text-gray',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Barbara Marion',
                      authorImg: '10.png',
                    }}
                  />
                </Col>
                <Col xxl={8} md={12} className="3xl:mb-[25px]">
                  <BannerCard
                    item={{
                      id: 3,
                      type: 'border',
                      bgImage: '',
                      icon: 'camera.svg',
                      title: 'Image',
                      titleColor: 'text-dark',
                      subTitleColor: 'text-gray',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Garry Sobars',
                      authorImg: '10.png',
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={24}>
            <div className="bg-white dark:bg-white10 shadow-[0_5px_20px_rgba(173,181,217,0.01)] p-[25px] rounded-10 relative mb-[25px]">
              <Row gutter="25">
                <Col xxl={8} md={12} className="3xl:mb-[25px]">
                  <BannerCard
                    item={{
                      id: 4,
                      type: 'primary',
                      icon: 'water-fall.svg',
                      title: 'Dark Color',
                      titleColor: 'text-white',
                      subTitleColor: 'text-white/50',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Barbara Marion',
                      authorImg: '10.png',
                    }}
                  />
                </Col>
                <Col xxl={8} md={12} className="3xl:mb-[25px]">
                  <BannerCard
                    item={{
                      id: 5,
                      type: 'dark',
                      icon: 'water-fall.svg',
                      title: 'Dark Color',
                      titleColor: 'text-white',
                      subTitleColor: 'text-white/50',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Barbara Marion',
                      authorImg: '10.png',
                    }}
                  />
                </Col>
                <Col xxl={8} md={12} className="3xl:mb-[25px]">
                  <BannerCard
                    item={{
                      id: 6,
                      type: 'Image',
                      bgImage: 'card-bg.png',
                      icon: 'image.svg',
                      title: 'Image',
                      titleColor: 'text-white',
                      subTitleColor: 'text-white/50',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Garry Sobars',
                      authorImg: '10.png',
                    }}
                  />
                </Col>
              </Row>
            </div>

            <Row gutter="25">
              <Col lg={8} xs={24} className="mb-[25px]">
                <FileListCard key="1" />
              </Col>
              <Col lg={8} xs={24} className="mb-[25px]">
                <FileListCard key="2" />
              </Col>
              <Col lg={8} xs={24} className="mb-[25px]">
                <FileListCard key="3" />
              </Col>
            </Row>
          </Col>
          <Col xxl={18} xs={24}>
            <ProductCardsList
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
          </Col>
        </Row>
      </main>
    </>
  );
}

export default WidgetsCard;
