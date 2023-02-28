<script>
  import NavButtons from "./Componets/NavButtons.svelte";
  import req from "../assets/requests.png";
  import all from "../assets/manageStudent.png";
  import score from "../assets/manageScore.png";
  import { Link } from "svelte-routing";
  //FIXME: Fix the loading in the manageschool
  //FIXME: fix loading in requests
  //FIXME: fix loading in Admin creation
  //FIXME: misalignments of Subject label
  //FIXME: Fix adding of Subjects
  //FIXME: Remove Student From Requests
  //FIXME: Fix Deleting Of Students
  //TODO: Shorten School Identification Token
  //TODO: Add table of content in docs
  //TODO: In answerit Give admins ability to toggle participation start
</script>

<main class="pb-5">
  <div class="breadcrumb">Adminstrative Workflow > Student management</div>
  <h2>Accepting Students</h2>
  <p>
    Students Are Expected to sign up via the <a
      href="https://answerit-vercel.app">Student Version of Answer It</a
    >. But a <Link to="/admins-privilages">Full Adminstrator or Owner</Link>is
    responsible and required for accepting registrations. There are 2 places
    where request managment can be done: In both the Dashboard and the
    <b>Requests</b> Accessible with the sidebar
  </p>
  <img src={req} alt="" class="img-fluid my-2" />
  <p>
    From Here Students' Registration requests can now be accepted or rejected
  </p>
  <hr />
  <h2>Manage Students</h2>
  <p>
    To Manage Verified Students you will have to naviagate to the
    <b>"Manage Students'"</b>
    Page from the sidebar. here you will see the list of students you have registered.
    on the platform. On the list of students click on edit to be redirected to the
    page where you can Change and modify information about that student.
  </p>
  <img src={all} alt="" class="img-fluid my-2" />
  That Page should look something like this:
  <img src={score} alt="" class="img-fluid my-2" />

  <p>
    This page as you can see is Divided into two sections The <b
      >Student information</b
    >
    and <b>Student Academic information</b> Sections respectively
  </p>

  <b>1. Students Infromation Section</b>
  <p>
    This is where the student's Bio information like name class, department
    email e.t.c can be changed. Changing the information here will have direct
    effect on the student's account behaviour based on what was modified. And
    you are required to click on save for the modification to be applied
  </p>
  <b>2. Students Academic information Section</b>
  <p>
    this displays the student's academic information notably examination scores
    and Offered Subjects. here you can directly alter a student's score and set
    which subject that student can currentlly participate in at that moment
  </p>
  <hr />
  <h2>Altering Scores</h2>
  There are various reasons why you might alter the score of a student's examination
  like penalizing a student for example is a viable reason. so Answerit allows you
  to this by modifying<b>Additional Score</b> field on a subject on the table
  below the Offered subjects in the
  <b>Student Academic information</b> section. Setting a normal or positive
  value will add to the score of the student for that subject while a negative
  value will deduct for that student.

  <hr />
  <h2>Setting Exam participation</h2>
  You can set which subject a student can currently participate in by simply clicking
  on the the subject in question in the student's<b>Offered Subjects</b> in the
  <b>Student Academic information</b>
  . Clicking on the subject actually toggles the status for participation on that
  subject on/off. so it the subject name button is background is colored means that
  student can participate,if white means that participation is not set for that subject.
  so clicking on it will toggle the participation state for that subject.
  <b
    >In Sum if Subject participation is not set(Button not brightly colored
    background) that student cannot participate on that particular subject.</b
  >
  <img src={score} alt="" class="img-fluid my-2" />
  <hr />
  <h2>Important Notes</h2>
  <p>
    Only Full adminstrators can see all the students. Exam managers can only see
    and students in classes they are assigned to. and set participation of
    subjects they are assigned to. subjects in the subject score management
    table only appear when that subject have been attempted at least once by the
    student so do not be suprised if you find it empty
  </p>
  <NavButtons prev="/subjects" next="/management"/>
</main>
