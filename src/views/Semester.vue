<template>
<div>
<h3>{{getSemester()}}</h3>
<div class="tableContainer">
<table>
          <tr>
            <th>Code</th>
            <th>Title</th>
            <th>Semester</th>
            <th>Credits</th>
            <th>Description</th>
          </tr>
          <tr class="column" v-for="course in courses" :key="course.id">
            <td>{{ course.code }} </td>
            <td>{{ course.title}} </td>
             <td> {{ course.semester}}</td>
            <td>{{ course.credits }} </td>
            <td v-if="course.description !== ''">{{ course.description }} </td>
            <td v-else>{{"No course description is provided"}}</td>
          </tr>
</table> 
</div>
</div>
</template>

<script>
export default {
  name: "Courses",
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    getSemester(){
        const path = location.pathname;
        const directories = path.split("/");
        const semester = directories[(directories.length-1)];
        return semester;
    },
    fetchCourses() {
      const semester = this.getSemester();
      fetch(`http://localhost:3000/api/semesters/${semester}`)
        .then((response) => response.json())
        .then((data) => (this.courses = data))
        .catch((err) => console.log(err.message));
   },
  },
  mounted() {
    this.fetchCourses();
    console.log("mounted");
  },
   computed: {
    currentRouteName(){
        return this.$route.name;
    }
   }
};
</script>

<style scoped>
  th {
  background: darkcyan
}
td {
  background: cadetblue
}
th, td {
  font-size: 16px;
  margin-bottom: 5px;
  padding: 8px 10px;
}
.tableContainer {
  background: white;
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: center;
}
</style>