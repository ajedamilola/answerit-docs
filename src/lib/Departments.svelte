<script>
  import NavButtons from "./Componets/NavButtons.svelte";
  import create from "../assets/department.png";
  import del from "../assets/DeptDelete.png";
</script>

<main class="pb-5">
  <div class="breadcrumb">Adminstrative Workflow > Deparments Management</div>
  <h1>Creating Deparments</h1>
  <p>
    Similar to creating classes you simply need to Navigate to <b>"Manage School"</b> click the <b>"Edit Departments"</b>
    Button to open the Deparments Management dropdown. Note:this button is just below
    the classes management dropdown. Fill in the name and description(Optional) of the department and click on Create  and you're done. See the steps in the image below.
    <br /> And remember all subjects you will be creating must belong to a department.
  </p>
  <img src={create} alt="" class="my-2 img-fluid">
  <hr />
  <h1>Deleting Departments</h1>
  <p>
    After Creating a department you will see a red trashcan button next to it's name. click to delete that department
    <br />
    <b class="text-danger">Note: Deleting department with subjects and students assigned to it isnt advisable. as the subject(s) will be unavailable for students</b>
  </p>
  <img src={del} alt="" class="my-2 img-fluid">
  <NavButtons next="/subjects" prev="/classes"/>

</main>
