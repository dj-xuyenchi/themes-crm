import chartData from '@/demoData/dashboardChartContent.json';
import mutations from './mutations';

const {
  forcastOverview,
  youtubeSubscribe,
  twitterOverview,
  instagramOverview,
  linkdinOverview,
  SocialTrafficMetrics,
  cashFlow,
  income,
  device,
  location,
  region,
  trafficChanel,
  performance,
  generated,
  topSale,
  browserState,
  closedDeals,
  recentDeal,
}: any = chartData;

const state = () => ({
  forcastData: null,
  foLoading: false,
  youtubeSubscribeData: null,
  yuLoading: false,
  closeDealData: null,
  cdLoading: false,
  recentDealData: null,
  recLoading: false,
  socialTrafficData: null,
  soLoading: false,
  twitterOverviewData: null,
  twLoading: false,
  instagramOverviewData: null,
  inLoading: false,
  linkdinOverviewData: null,
  liLoading: false,
  cashFlowData: null,
  cfLoading: false,
  incomeData: null,
  icLoading: false,
  performanceData: null,
  perLoading: false,
  trafficChanelData: null,
  tcLoading: false,
  deviceData: null,
  dvLoading: false,
  landingPageData: null,
  lpLoading: false,
  regionData: null,
  reLoading: false,
  generatedData: null,
  geLoading: false,
  topSaleData: null,
  browserStateData: null,
  tsLoading: false,
  locationData: null,
  loLoading: false,
  error: null,
});

const actions = {
  async recentDealGetData({ commit }: { commit: any }) {
    const { year } = recentDeal;
    try {
      commit('recentDealBegin');
      commit('recentDealSuccess', year);
    } catch (err) {
      commit('recentDealErr', err);
    }
  },
  async recentDealFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('recentDealBegin');
      setTimeout(() => {
        commit('recentDealSuccess', recentDeal[value]);
      }, 100);
    } catch (err) {
      commit('recentDealErr', err);
    }
  },
  async closeDealGetData({ commit }: { commit: any }) {
    const { year } = closedDeals;
    try {
      commit('closeDealBegin');
      commit('closeDealSuccess', year);
    } catch (err) {
      commit('closeDealErr', err);
    }
  },
  async closeDealFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('closeDealBegin');
      setTimeout(() => {
        commit('closeDealSuccess', closedDeals[value]);
      }, 100);
    } catch (err) {
      commit('closeDealErr', err);
    }
  },
  async topSaleGetData({ commit }: { commit: any }) {
    const { year } = topSale;
    try {
      commit('topSaleBegin');
      commit('topSaleSuccess', year);
    } catch (err) {
      commit('topSaleErr', err);
    }
  },
  async topSaleFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('topSaleBegin');
      setTimeout(() => {
        commit('topSaleSuccess', topSale[value]);
      }, 100);
    } catch (err) {
      commit('topSaleErr', err);
    }
  },
  async browserStateGetData({ commit }: { commit: any }) {
    const { today } = browserState;
    try {
      commit('browserStateBegin');
      commit('browserStateSuccess', today);
    } catch (err) {
      commit('browserStateErr', err);
    }
  },
  async browserStateFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('browserStateBegin');
      setTimeout(() => {
        commit('browserStateSuccess', browserState[value]);
      }, 100);
    } catch (err) {
      commit('browserStateErr', err);
    }
  },
  async topLocationGetData({ commit }: { commit: any }) {
    const { year } = location;
    try {
      commit('topLocationBegin');
      commit('topLocationSuccess', year);
    } catch (err) {
      commit('topLocationErr', err);
    }
  },
  async topLocationFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('topLocationBegin');
      setTimeout(() => {
        commit('topLocationSuccess', location[value]);
      }, 100);
    } catch (err) {
      commit('topLocationErr', err);
    }
  },
  async topRegionGetData({ commit }: { commit: any }) {
    const { year } = region;
    try {
      commit('topRegionBegin');
      commit('topRegionSuccess', year);
    } catch (err) {
      commit('topRegionErr', err);
    }
  },
  async topRegionFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('topRegionBegin');
      setTimeout(() => {
        commit('topRegionSuccess', region[value]);
      }, 100);
    } catch (err) {
      commit('topRegionErr', err);
    }
  },
  async generatedGetData({ commit }: { commit: any }) {
    const { year } = generated;
    try {
      commit('generatedBegin');
      commit('generatedSuccess', year);
    } catch (err) {
      commit('generatedErr', err);
    }
  },
  async generatedFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('generatedBegin');
      setTimeout(() => {
        commit('generatedSuccess', generated[value]);
      }, 100);
    } catch (err) {
      commit('generatedErr', err);
    }
  },
  async performanceGetData({ commit }: { commit: any }) {
    const { year } = performance;
    try {
      commit('performanceBegin');
      commit('performanceSuccess', year);
    } catch (err) {
      commit('performanceErr', err);
    }
  },
  async performanceFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('performanceBegin');
      setTimeout(() => {
        commit('performanceSuccess', performance[value]);
      }, 100);
    } catch (err) {
      commit('performanceErr', err);
    }
  },
  async setIsLoading({ commit }: { commit: any }) {
    try {
      commit('updateLoadingBegin');
      setTimeout(() => {
        commit('updateLoadingSuccess');
      }, 100);
    } catch (err) {
      commit('updateLoadingErr');
    }
  },
  async trafficChanelGetData({ commit }: { commit: any }) {
    const { year } = trafficChanel;
    try {
      commit('trafficChanelBegin');
      commit('trafficChanelSuccess', year);
    } catch (err) {
      commit('trafficChanelErr', err);
    }
  },
  async trafficChanelFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('trafficChanelBegin');
      setTimeout(() => {
        commit('trafficChanelSuccess', trafficChanel[value]);
      }, 100);
    } catch (err) {
      commit('trafficChanelErr', err);
    }
  },
  async landingPageGetData({ commit }: { commit: any }) {
    const { year } = trafficChanel;
    try {
      commit('landingPageBegin');
      commit('landingPageSuccess', year);
    } catch (err) {
      commit('landingPageErr', err);
    }
  },
  async landingPageFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('landingPageBegin');
      setTimeout(() => {
        commit('landingPageSuccess', trafficChanel[value]);
      }, 100);
    } catch (err) {
      commit('landingPageErr', err);
    }
  },
  async regionGetData({ commit }: { commit: any }) {
    const { year } = region;
    try {
      commit('regionBegin');
      commit('regionSuccess', year);
    } catch (err) {
      commit('regionErr', err);
    }
  },
  async regionFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('regionBegin');
      setTimeout(() => {
        commit('regionSuccess', region[value]);
      }, 100);
    } catch (err) {
      commit('regionErr', err);
    }
  },
  async deviceGetData({ commit }: { commit: any }) {
    const { year } = device;
    try {
      commit('deviceBegin');
      commit('deviceSuccess', year);
    } catch (err) {
      commit('deviceErr', err);
    }
  },
  async deviceFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('deviceBegin');
      setTimeout(() => {
        commit('deviceSuccess', device[value]);
      }, 100);
    } catch (err) {
      commit('deviceErr', err);
    }
  },
  async incomeGetData({ commit }: { commit: any }) {
    const { year } = income;
    try {
      commit('incomeBegin');
      commit('incomeSuccess', year);
    } catch (err) {
      commit('incomeErr', err);
    }
  },
  async incomeFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('incomeBegin');
      setTimeout(() => {
        commit('incomeSuccess', income[value]);
      }, 100);
    } catch (err) {
      commit('incomeErr', err);
    }
  },
  async cashFlowGetData({ commit }: { commit: any }) {
    const { year } = cashFlow;
    try {
      commit('cashFlowBegin');
      commit('cashFlowSuccess', year);
    } catch (err) {
      commit('cashFlowErr', err);
    }
  },
  async cashFlowFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('cashFlowBegin');
      setTimeout(() => {
        commit('cashFlowSuccess', cashFlow[value]);
      }, 100);
    } catch (err) {
      commit('cashFlowErr', err);
    }
  },
  async socialTrafficGetData({ commit }: { commit: any }) {
    const { today } = SocialTrafficMetrics;
    try {
      commit('socialTrafficBegin');
      commit('socialTrafficSuccess', today);
    } catch (err) {
      commit('socialTrafficErr', err);
    }
  },
  async socialTrafficFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('socialTrafficBegin');
      setTimeout(() => {
        commit('socialTrafficSuccess', SocialTrafficMetrics[value]);
      }, 100);
    } catch (err) {
      commit('socialTrafficErr', err);
    }
  },
  async linkdinOverviewGetData({ commit }: { commit: any }) {
    const { month } = linkdinOverview;
    try {
      commit('linkdinOverviewBegin');
      commit('linkdinOverviewSuccess', month);
    } catch (err) {
      commit('linkdinOverviewErr', err);
    }
  },
  async linkdinOverviewFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('linkdinOverviewBegin');
      setTimeout(() => {
        commit('linkdinOverviewSuccess', linkdinOverview[value]);
      }, 100);
    } catch (err) {
      commit('linkdinOverviewErr', err);
    }
  },
  async instagramOverviewGetData({ commit }: { commit: any }) {
    const { month } = instagramOverview;
    try {
      commit('instagramOverviewBegin');
      commit('instagramOverviewSuccess', month);
    } catch (err) {
      commit('instagramOverviewErr', err);
    }
  },
  async instagramOverviewFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('instagramOverviewBegin');
      setTimeout(() => {
        commit('instagramOverviewSuccess', instagramOverview[value]);
      }, 100);
    } catch (err) {
      commit('instagramOverviewErr', err);
    }
  },
  async forcastOverviewGetData({ commit }: { commit: any }) {
    const { today } = forcastOverview;
    try {
      commit('forcastOverviewBegin');
      commit('forcastOverviewSuccess', today);
    } catch (err) {
      commit('forcastOverviewErr', err);
    }
  },
  async forcastOverviewFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('forcastOverviewBegin');
      setTimeout(() => {
        commit('forcastOverviewSuccess', forcastOverview[value]);
      }, 100);
    } catch (err) {
      commit('forcastOverviewErr', err);
    }
  },
  async youtubeSubscribeGetData({ commit }: { commit: any }) {
    const { year } = youtubeSubscribe;

    try {
      commit('youtubeSubscribeBegin');
      commit('youtubeSubscribeSuccess', year);
    } catch (err) {
      commit('youtubeSubscribeErr', err);
    }
  },
  async youtubeSubscribeFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('youtubeSubscribeBegin');
      setTimeout(() => {
        commit('youtubeSubscribeSuccess', youtubeSubscribe[value]);
      }, 100);
    } catch (err) {
      commit('youtubeSubscribeErr', err);
    }
  },
  async twitterOverviewGetData({ commit }: { commit: any }) {
    const { month } = twitterOverview;
    try {
      commit('twitterOverviewBegin');
      commit('twitterOverviewSuccess', month);
    } catch (err) {
      commit('twitterOverviewErr', err);
    }
  },
  async twitterOverviewFilterData({ commit }: { commit: any }, value: any) {
    try {
      commit('twitterOverviewBegin');
      setTimeout(() => {
        commit('twitterOverviewSuccess', twitterOverview[value]);
      }, 100);
    } catch (err) {
      commit('twitterOverviewErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
