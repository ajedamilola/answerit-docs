<script>
  import SideBar from "./lib/Componets/SideBar.svelte";
  import { Route, Router } from "svelte-routing";
  import Intro from "./lib/Intro.svelte";
  import BasicConcepts from "./lib/BasicConcepts.svelte";
  import Admins from "./lib/Admins.svelte";
  import Classes from "./lib/Classes.svelte";
  import Departments from "./lib/Departments.svelte";
  import Settings from "./lib/Settings.svelte";
  import Pricing from "./lib/pricing.svelte";
  import Subjects from "./lib/Subjects.svelte";
  import Students from "./lib/Students.svelte";
    import ExamManagement from "./lib/ExamManagement.svelte";
    import ExamSubjectConfig from "./lib/ExamSubjectConfig.svelte";
    import QuestionsManagement from "./lib/QuestionsManagement.svelte";
</script>

<main class="main">
  <Router>
    <SideBar />
    <div class="main-content">
      <Route path="/" component={Intro} />
      <Route path="/basic-concepts" component={BasicConcepts} />
      <Route path="/admins-privilages" component={Admins} />
      <Route path="/classes" component={Classes} />
      <Route path="/departments" component={Departments} />
      <Route path="/subjects" component={Subjects} />
      <Route path="/students" component={Students} />
      <Route path="/management" component={Settings} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/exams" component={ExamManagement} />
      <Route path="/exam-config" component={ExamSubjectConfig} />
      <Route path="/questions" component={QuestionsManagement} />
    </div>
  </Router>
</main>

<style>
  .main {
    display: flex;
  }
  .main-content {
    margin-left: 18vw;
    margin-right: 2vw;
    margin-top: 30px;
  }
</style>
