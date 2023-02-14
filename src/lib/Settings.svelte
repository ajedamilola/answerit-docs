<script>
  import NavButtons from "./Componets/NavButtons.svelte";
  import img from "../assets/class.png";
  import del from "../assets/classDel.png";
  import { Link } from "svelte-routing";
</script>

<main class="pb-5">
  <div class="breadcrumb">Adminstrative Workflow > School Management</div>
  <h1>Editing Basic information</h1>
  <p>
    In order to make school-wide changes you will first have to navigate to the <b
      >Manage School</b
    >
    via the sidebar after navigating you will see page that is divided into three
    sections the first showing a <b>Edit School Information</b> drop-down
    button, the
    <b>"School Settings"</b>
    section and the last section Showing a <b>Edit Subjects</b> drop down
    button.
    <br />
    Click on the <b>Edit School Information</b> Dropdown button to expand it's content
    here you will be able to set various basic but important settings such as School
    name, email, address, session name(Term Name), Ability fo students to print thier
    report sheet or be able to participate in any exams at all. Make sure you click on <b>Save Changes</b> at the bottom to apply changes.
    <b>You will also be able to see the School Indentification Token (SIT) it uniquely identifies your school. students need this to Register </b>
    <br />
    And Owners will be able to upload school logo, reset and even delete the school, View and manage Subscription.
    <b class="text-info">Know that changes made directly affects the entire school's examination system</b>

  </p>
  <hr />
  <br />
  <p>
    For Subject Management see <Link to="/subjects">Here</Link><br />
    For Department Management see <Link to="/departments">Here</Link><br />
    For Class Management see <Link to="/classes">Here</Link><br />
  </p>

</main>
