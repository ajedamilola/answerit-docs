<script>
  import NavButtons from "./Componets/NavButtons.svelte";
  import n1 from "../assets/newAdmin/1.png"
  import n2 from "../assets/newAdmin/2.png"
  import n3 from "../assets/newAdmin/3.png"
</script>

<main class="pb-5">
  <div class="breadcrumb">
    Adminstrative Workflow > Adminstrators and Privilages
  </div>
  <h1>Admins</h1>
  <p>
    Admins are the operational managers and backbone of the school examination
    infastructure on Answerit. they set all the parameters(Questions,
    Departments e.t.c) which determines the entire exam prcess of the school.
    <br />
    We Have two types of adminstrators in Answerit
  </p>
  <ul class="list-group" style="width: fit-content;margin-top:-4px">
    <li class="list-group-item">Exam managers</li>
    <li class="list-group-item">Full Adminstrators</li>
    <li class="list-group-item">School Owner</li>
  </ul>

  <h3 class="mt-5">Exam Managers</h3>
  <p>
    These Type Of Admins Can only set, upload and delete questions on the
    subjects that are assigned to him/her. They can only manage questions, exam
    duration, scores and marks for the subjects they are assigned to.
  </p>
  <h3 class="mt-3">Full Adminstrators</h3>
  <p>
    These Type Of Admins have the privilages of Exam managers and more. they can
    assign an unassign subjects at will to any and from any other admin. they
    fully configure the school and create other admins including ones with same
    privilage as themselves. The prvilages granted to Full Adminstrators include
  </p>
  <ul>
    <li>Managing Of Classes</li>
    <li>Managing Of Departments</li>
    <li>Managing Of Subjects</li>
    <li>Managing Of Students</li>
    <li>Editing Of Basic School Information</li>
    <li>Creating and Deleting Other Admins</li>
    <li>Setting And Managing Exam questions and duration</li>
    <li>Managing Details of ther admins</li>
    <li>Assigning of subjects</li>
  </ul>
  <h3 class="mt-3">School Owner</h3>
  <p>
    This is the <b>Full Adminstrator</b> That Registred The School on Answerit. He/She
    Can Delete Downgrade and even reset the school's entire data (i.e. this admins
    manage the plan the school is on
  </p>
  <h1 class="pt-4">Workflow</h1>
  <p>
    Follow The Guide below to Learn To Manage Adminstrators and thier privilages
  </p>
  <h3 class="pt-3">
      Creating An Admin
  </h3>
  <p>1. Logon to the dashboard and click on the "<b>CREATE ADMIN</b>" button on the top right corner as shown below</p>
  <img src={n1} alt="New Admin" class="img-fluid">
  <p class="pt-4">
      2. Carefully Fill In All The Details (Note The "Privilage Level" Field) And Click Create
  </p>
  <img src={n2} alt="New Admin" class="img-fluid">

  <h3 class="text-center">
      Congratulations You Have Created A new Admin Successfully
  </h3>
  <p class="mt-4">Use the Sidebar to navigate to the Adminstrators Page</p>
  <img src={n3} alt="" class="img-fluid">

  <NavButtons prev="/basic-concepts" next="/classes" />
</main>
