export default {
  recentDealBegin(state) {
    state.reLoading = true;
  },

  recentDealSuccess(state, data) {
    state.reLoading = false;
    state.recentDealData = data;
  },

  recentDealErr(state, err) {
    state.reLoading = false;
    state.error = err;
  },

  closeDealBegin(state) {
    state.cdLoading = true;
  },

  closeDealSuccess(state, data) {
    state.cdLoading = false;
    state.closeDealData = data;
  },

  closeDealErr(state, err) {
    state.cdLoading = false;
    state.error = err;
  },

  topSaleBegin(state) {
    state.tsLoading = true;
  },

  topSaleSuccess(state, data) {
    state.tsLoading = false;
    state.topSaleData = data;
  },

  topSaleErr(state, err) {
    state.tsLoading = false;
    state.error = err;
  },

  browserStateBegin(state) {
    state.tsLoading = true;
  },

  browserStateSuccess(state, data){
    state.tsLoading = false;
    state.browserStateData = data;
  },

  browserStateErr(state, err){
    state.tsLoading = false;
    state.err = err;
  },

  topLocationBegin(state) {
    state.tsLoading = true;
  },

  topLocationSuccess(state, data) {
    state.tsLoading = false;
    state.locationData = data;
  },

  topLocationErr(state, err) {
    state.tsLoading = false;
    state.error = err;
  },
  regionBegin(state) {
    state.tsLoading = true;
  },

  regionSuccess(state, data) {
    state.tsLoading = false;
    state.locationData = data;
  },

  regionErr(state, err) {
    state.tsLoading = false;
    state.error = err;
  },

  generatedBegin(state) {
    state.geLoading = true;
  },

  generatedSuccess(state, data) {
    state.geLoading = false;
    state.generatedData = data;
  },

  generatedErr(state, err) {
    state.geLoading = false;
    state.error = err;
  },

  performanceBegin(state) {
    state.perLoading = true;
  },

  performanceSuccess(state, data) {
    state.perLoading = false;
    state.performanceData = data;
  },

  performanceErr(state, err) {
    state.perLoading = false;
    state.error = err;
  },

  updateLoadingBegin(state) {
    state.perLoading = true;
  },

  updateLoadingSuccess(state) {
    state.perLoading = false;
  },

  updateLoadingErr(state) {
    state.perLoading = false;
  },

  trafficChanelBegin(state) {
    state.tcLoading = true;
  },

  trafficChanelSuccess(state, data) {
    state.tcLoading = false;
    state.trafficChanelData = data;
  },

  trafficChanelErr(state, err) {
    state.tcLoading = false;
    state.error = err;
  },

  landingPageBegin(state) {
    state.lpLoading = true;
  },

  landingPageSuccess(state, data) {
    state.lpLoading = false;
    state.landingPageData = data;
  },

  landingPageErr(state, err) {
    state.lpLoading = false;
    state.error = err;
  },

  topRegionBegin(state) {
    state.reLoading = true;
  },

  topRegionSuccess(state, data) {
    state.reLoading = false;
    state.regionData = data;
  },

  topRegionErr(state, err) {
    state.reLoading = false;
    state.error = err;
  },

  deviceBegin(state) {
    state.dvLoading = true;
  },

  deviceSuccess(state, data) {
    state.dvLoading = false;
    state.deviceData = data;
  },

  deviceErr(state, err) {
    state.dvLoading = false;
    state.error = err;
  },

  incomeBegin(state) {
    state.icLoading = true;
  },

  incomeSuccess(state, data) {
    state.icLoading = false;
    state.incomeData = data;
  },

  incomeErr(state, err) {
    state.icLoading = false;
    state.error = err;
  },

  cashFlowBegin(state) {
    state.cfLoading = true;
  },

  cashFlowSuccess(state, data) {
    state.cfLoading = false;
    state.cashFlowData = data;
  },

  cashFlowErr(state, err) {
    state.cfLoading = false;
    state.error = err;
  },

  socialTrafficBegin(state) {
    state.soLoading = true;
  },

  socialTrafficSuccess(state, data) {
    state.soLoading = false;
    state.socialTrafficData = data;
  },

  socialTrafficErr(state, err) {
    state.soLoading = false;
    state.error = err;
  },

  linkdinOverviewBegin(state) {
    state.liLoading = true;
  },

  linkdinOverviewSuccess(state, data) {
    state.liLoading = false;
    state.linkdinOverviewData = data;
  },

  linkdinOverviewErr(state, err) {
    state.liLoading = false;
    state.error = err;
  },

  instagramOverviewBegin(state) {
    state.inLoading = true;
  },

  instagramOverviewSuccess(state, data) {
    state.inLoading = false;
    state.instagramOverviewData = data;
  },

  instagramOverviewErr(state, err) {
    state.inLoading = false;
    state.error = err;
  },

  twitterOverviewBegin(state) {
    state.twLoading = true;
  },

  twitterOverviewSuccess(state, data) {
    state.twLoading = false;
    state.twitterOverviewData = data;
  },

  twitterOverviewErr(state, err) {
    state.twLoading = false;
    state.error = err;
  },

  forcastOverviewBegin(state) {
    state.foLoading = true;
  },

  forcastOverviewSuccess(state, data) {
    state.foLoading = false;
    state.forcastData = data;
  },

  forcastOverviewErr(state, err) {
    state.foLoading = false;
    state.error = err;
  },

  youtubeSubscribeBegin(state) {
    state.yuLoading = true;
  },

  youtubeSubscribeSuccess(state, data) {
    state.yuLoading = false;
    state.youtubeSubscribeData = data;
  },

  youtubeSubscribeErr(state, err) {
    state.yuLoading = false;
    state.error = err;
  },
};
