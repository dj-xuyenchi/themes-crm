<template>
  <div>
    <Main>
      <ErrorWrapper>
        <img :src="require(`../../static/img/pages/404.svg`)" alt="404" />
        <sdHeading class="error-text" as="h3"> 404 </sdHeading>
        <p>Sorry! the page you are looking for doesn't exist.</p>
        <router-link to="/">
          <sdButton size="default" type="primary" to="/"> Return Home </sdButton>
        </router-link>
      </ErrorWrapper>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import { ErrorWrapper } from './style';
import { defineComponent } from 'vue';
export default defineComponent({
  name: '404',
  components: {
    Main,
    ErrorWrapper,
  },
  data() {
    return {};
  },
});
</script>
