<template>
  <WizardWrapper>
    <WizardFour>
      <Steps
        isSwitch
        isVertical
        :current="0"
        :status="status"
        :steps="steps"
        direction="vertical"
        @onNext="next"
        @onPrev="prev"
        @onDone="done"
        :isFinished="isFinished"
      >
        <template #start>
          <BasicFormWrapper class="basic-form-inner">
            <div class="ninjadash-form-checkout">
              <a-row justify="center">
                <a-col :xs="24">
                  <div class="create-account-form">
                    <sdHeading as="h4">1. Please Create Your Account</sdHeading>
                    <a-form name="account" layout="vertical">
                      <a-form-item name="username" label="Username">
                        <a-input placeholder="Username" />
                      </a-form-item>
                      <a-form-item name="password" label="Password">
                        <a-input-password
                          type="password"
                          v-model:value="password"
                          placeholder="Password"
                        />
                      </a-form-item>
                      <a-form-item
                        name="confirm_password"
                        label="Confirm Password"
                      >
                        <a-input-password
                          type="password"
                          v-model:value="confirm_password"
                          placeholder="Password"
                        />
                      </a-form-item>
                    </a-form>
                  </div>
                </a-col>
              </a-row>
            </div>
          </BasicFormWrapper>
        </template>
        <template #profile>
          <BasicFormWrapper class="basic-form-inner">
            <div class="ninjadash-form-checkout">
              <a-row justify="center">
                <a-col :xs="24">
                  <div class="shipping-form">
                    <sdHeading as="h4">2. Please setup your profile</sdHeading>
                    <a-form :model="profile" name="address" layout="vertical">
                      <a-form-item name="fname" label="First Name">
                        <a-input
                          v-model:value="profile.fname"
                          placeholder="First Name"
                        />
                      </a-form-item>
                      <a-form-item name="lname" label="Last Name">
                        <a-input
                          v-model:value="profile.lname"
                          placeholder="Last Name"
                        />
                      </a-form-item>
                      <a-form-item name="email" label="Email Address">
                        <a-input
                          type="email"
                          v-model:value="profile.email"
                          placeholder="name@gmail.com"
                        />
                      </a-form-item>
                      <a-form-item name="street" label="Address">
                        <a-input
                          v-model:value="profile.address"
                          placeholder="Address"
                        />
                      </a-form-item>
                    </a-form>
                  </div>
                </a-col>
              </a-row>
            </div>
          </BasicFormWrapper>
        </template>

        <template #hints>
          <BasicFormWrapper class="basic-form-inner">
            <div class="ninjadash-form-checkout">
              <a-row justify="center">
                <a-col :xs="24">
                  <div class="payment-method-form profile-hints">
                    <sdHeading as="h4">3. Please see your hints</sdHeading>
                    <p>
                      First Name : <span>{{ profile.fname }}</span>
                    </p>
                    <p>
                      Last Name : <span>{{ profile.lname }}</span>
                    </p>
                    <p>
                      Email Address : <span>{{ profile.email }}</span>
                    </p>
                    <p>
                      Address : <span>{{ profile.address }}</span>
                    </p>
                  </div>
                </a-col>
              </a-row>
            </div>
          </BasicFormWrapper>
        </template>

        <template #finish>
          <BasicFormWrapper
            v-if="status !== 'finish'"
            :style="{ width: '100%' }"
          >
            <a-row justify="center">
              <a-col :xs="24">
                <div class="ninjadash-finish-order" :style="{ width: '100%' }">
                  <sdHeading as="h4">4. Let's Finished</sdHeading>
                  <a-checkbox v-model:checked="checked"
                    ><span class="checkbox-label"
                      >I Agree with the Terms and Conditions.</span
                    ></a-checkbox
                  >
                </div>
              </a-col>
            </a-row>
          </BasicFormWrapper>

          <a-row v-else justify="center" :style="{ width: '100%' }">
            <a-col :xs="24">
              <div class="checkout-successful">
                <sdCards
                  headless
                  :bodyStyle="{
                    borderRadius: '20px',
                  }"
                >
                  <sdCards headless>
                    <span class="icon-success">
                      <unicon name="check"></unicon>
                    </span>
                    <sdHeading as="h3">Thank You</sdHeading>
                    <p>Your registration completed successfully</p>
                  </sdCards>
                </sdCards>
              </div>
            </a-col>
          </a-row>
        </template>
      </Steps>
    </WizardFour>
  </WizardWrapper>
</template>
<script>
import { WizardWrapper, WizardFour } from "../Style";
import { BasicFormWrapper } from "../../styled";
import Steps from "@/components/steps/steps";
import { useStore } from "vuex";
import { computed, ref, reactive, defineComponent } from "vue";

const WizardsFour = defineComponent({
  name: "WizardsFour",
  components: {
    Steps,
    WizardWrapper,
    WizardFour,
    BasicFormWrapper,
  },
  setup() {
    const { state } = useStore();
    const isLoading = computed(() => state.cart.loading);
    const rtl = computed(() => state.themeLayout.rtlData);
    const status = ref("process");
    const isFinished = ref(false);
    const isVertical = ref(true);
    const current = ref(1);
    const password = ref(123456);
    const confirm_password = ref();
    const profile = reactive({
      fname: "",
      lname: "",
      email: "",
      address: "",
    });

    const next = () => {
      status.value = "process";
      current.value = current.value + 1;
    };

    const prev = () => {
      status.value = "process";
      current.value = current.value - 1;
    };

    const done = () => {
      const confirm = window.confirm("Are sure to submit order?");
      if (confirm) {
        status.value = "finish";
        isFinished.value = true;
        current.value = 0;
      }
    };

    return {
      done,
      prev,
      next,
      isLoading,
      rtl,
      status,
      isFinished,
      isVertical,
      current,
      profile,
      password,
      confirm_password,
      checked: ref(false),
      steps: [
        {
          title: "Start",
          content: "start",
        },
        {
          title: "Profile",
          content: "profile",
        },
        {
          title: "Hints",
          content: "hints",
        },
        {
          title: "Finish",
          content: "finish",
        },
      ],
    };
  },
});

export default WizardsFour;
</script>
