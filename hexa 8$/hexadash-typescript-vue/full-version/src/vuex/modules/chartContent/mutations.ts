export default {
  recentDealBegin(state: any) {
    state.reLoading = true;
  },

  recentDealSuccess(state: any, data: any) {
    state.reLoading = false;
    state.recentDealData = data;
  },

  recentDealErr(state: any, err: any) {
    state.reLoading = false;
    state.error = err;
  },

  closeDealBegin(state: any) {
    state.cdLoading = true;
  },

  closeDealSuccess(state: any, data: any) {
    state.cdLoading = false;
    state.closeDealData = data;
  },

  closeDealErr(state: any, err: any) {
    state.cdLoading = false;
    state.error = err;
  },

  topSaleBegin(state: any) {
    state.tsLoading = true;
  },

  topSaleSuccess(state: any, data: any) {
    state.tsLoading = false;
    state.topSaleData = data;
  },

  topSaleErr(state: any, err: any) {
    state.tsLoading = false;
    state.error = err;
  },

  browserStateBegin(state: any) {
    state.tsLoading = true;
  },

  browserStateSuccess(state: any, data: any) {
    state.tsLoading = false;
    state.browserStateData = data;
  },

  browserStateErr(state: any, err: any) {
    state.tsLoading = false;
    state.err = err;
  },

  topLocationBegin(state: any) {
    state.tsLoading = true;
  },

  topLocationSuccess(state: any, data: any) {
    state.tsLoading = false;
    state.locationData = data;
  },

  topLocationErr(state: any, err: any) {
    state.tsLoading = false;
    state.error = err;
  },
  regionBegin(state: any) {
    state.tsLoading = true;
  },

  regionSuccess(state: any, data: any) {
    state.tsLoading = false;
    state.locationData = data;
  },

  regionErr(state: any, err: any) {
    state.tsLoading = false;
    state.error = err;
  },

  generatedBegin(state: any) {
    state.geLoading = true;
  },

  generatedSuccess(state: any, data: any) {
    state.geLoading = false;
    state.generatedData = data;
  },

  generatedErr(state: any, err: any) {
    state.geLoading = false;
    state.error = err;
  },

  performanceBegin(state: any) {
    state.perLoading = true;
  },

  performanceSuccess(state: any, data: any) {
    state.perLoading = false;
    state.performanceData = data;
  },

  performanceErr(state: any, err: any) {
    state.perLoading = false;
    state.error = err;
  },

  updateLoadingBegin(state: any) {
    state.perLoading = true;
  },

  updateLoadingSuccess(state: any) {
    state.perLoading = false;
  },

  updateLoadingErr(state: any) {
    state.perLoading = false;
  },

  trafficChanelBegin(state: any) {
    state.tcLoading = true;
  },

  trafficChanelSuccess(state: any, data: any) {
    state.tcLoading = false;
    state.trafficChanelData = data;
  },

  trafficChanelErr(state: any, err: any) {
    state.tcLoading = false;
    state.error = err;
  },

  landingPageBegin(state: any) {
    state.lpLoading = true;
  },

  landingPageSuccess(state: any, data: any) {
    state.lpLoading = false;
    state.landingPageData = data;
  },

  landingPageErr(state: any, err: any) {
    state.lpLoading = false;
    state.error = err;
  },

  topRegionBegin(state: any) {
    state.reLoading = true;
  },

  topRegionSuccess(state: any, data: any) {
    state.reLoading = false;
    state.regionData = data;
  },

  topRegionErr(state: any, err: any) {
    state.reLoading = false;
    state.error = err;
  },

  deviceBegin(state: any) {
    state.dvLoading = true;
  },

  deviceSuccess(state: any, data: any) {
    state.dvLoading = false;
    state.deviceData = data;
  },

  deviceErr(state: any, err: any) {
    state.dvLoading = false;
    state.error = err;
  },

  incomeBegin(state: any) {
    state.icLoading = true;
  },

  incomeSuccess(state: any, data: any) {
    state.icLoading = false;
    state.incomeData = data;
  },

  incomeErr(state: any, err: any) {
    state.icLoading = false;
    state.error = err;
  },

  cashFlowBegin(state: any) {
    state.cfLoading = true;
  },

  cashFlowSuccess(state: any, data: any) {
    state.cfLoading = false;
    state.cashFlowData = data;
  },

  cashFlowErr(state: any, err: any) {
    state.cfLoading = false;
    state.error = err;
  },

  socialTrafficBegin(state: any) {
    state.soLoading = true;
  },

  socialTrafficSuccess(state: any, data: any) {
    state.soLoading = false;
    state.socialTrafficData = data;
  },

  socialTrafficErr(state: any, err: any) {
    state.soLoading = false;
    state.error = err;
  },

  linkdinOverviewBegin(state: any) {
    state.liLoading = true;
  },

  linkdinOverviewSuccess(state: any, data: any) {
    state.liLoading = false;
    state.linkdinOverviewData = data;
  },

  linkdinOverviewErr(state: any, err: any) {
    state.liLoading = false;
    state.error = err;
  },

  instagramOverviewBegin(state: any) {
    state.inLoading = true;
  },

  instagramOverviewSuccess(state: any, data: any) {
    state.inLoading = false;
    state.instagramOverviewData = data;
  },

  instagramOverviewErr(state: any, err: any) {
    state.inLoading = false;
    state.error = err;
  },

  twitterOverviewBegin(state: any) {
    state.twLoading = true;
  },

  twitterOverviewSuccess(state: any, data: any) {
    state.twLoading = false;
    state.twitterOverviewData = data;
  },

  twitterOverviewErr(state: any, err: any) {
    state.twLoading = false;
    state.error = err;
  },

  forcastOverviewBegin(state: any) {
    state.foLoading = true;
  },

  forcastOverviewSuccess(state: any, data: any) {
    state.foLoading = false;
    state.forcastData = data;
  },

  forcastOverviewErr(state: any, err: any) {
    state.foLoading = false;
    state.error = err;
  },

  youtubeSubscribeBegin(state: any) {
    state.yuLoading = true;
  },

  youtubeSubscribeSuccess(state: any, data: any) {
    state.yuLoading = false;
    state.youtubeSubscribeData = data;
  },

  youtubeSubscribeErr(state: any, err: any) {
    state.yuLoading = false;
    state.error = err;
  },
};
