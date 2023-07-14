<template>
  <sdPageHeader
    title="Course"
    class="ninjadash-page-header-main"
    :routes="pageRoutes"
  ></sdPageHeader>

  <Main>
    <a-row :gutter="25">
      <CourseCard
        v-for="(value, index) in courses"
        :key="index"
        :courseData="value"
      />

      <a-col :xs="24">
        <CoursePagination>
          <a-pagination
            v-if="courses.length"
            @change="onHandleChange"
            showSizeChanger
            :pageSize="10"
            :default-current="1"
            :total="40"
          />
        </CoursePagination>
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import { Main } from "../../styled";
import { defineComponent, onMounted, ref } from "vue";
import courseData from "../../../demoData/course.json";
import CourseCard from "../../../components/cards/CourseCard";
import { CoursePagination } from "./Style";

const pageRoutes = [
  {
    path: "index",
    breadcrumbName: "Dashboard",
  },
  {
    path: "course",
    breadcrumbName: "Courses",
  },
];

const Course = defineComponent({
  name: "Course",
  components: {
    Main,
    CourseCard,
    CoursePagination,
  },
  setup() {
    const courses = ref([]);
    const current = ref(0);
    const pageSize = ref(0);

    onMounted(() => {
      courses.value = courseData;
    });

    const onShowSizeChange = (c_value, p_value) => {
      current.value = c_value;
      pageSize.value = p_value;
    };

    function onHandleChange(c_value, p_value) {
      current.value = c_value;
      pageSize.value = p_value;
    }

    return {
      pageRoutes,
      courses,
      onShowSizeChange,
      onHandleChange,
      current,
      pageSize,
    };
  },
});

export default Course;
</script>
