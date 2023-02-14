<script>
  import NavButtons from "./Componets/NavButtons.svelte";
  import create from "../assets/Subjects.png";
  import del from "../assets/delSubject.png";
</script>

<main class="pb-5">
  <div class="breadcrumb">Adminstrative Workflow > Subject Management</div>
  <h1>Creating Subjects</h1>
  <p>
    In order to create subjects you must have at least one departments. Your
    School is not split in Deparments? then it's advisable to create a <b
      >"General"</b
    >
    Deparment.
    <br />
    The First step is to navigate to <b>"Manage School"</b> from the sidebar and
    at the bottom of the page you should find a <b>"Edit Subjects"</b> Button. click
    on it and you should see something like this...
  </p>
  <img src={create} alt="" class="my-2 img-fluid" />

  <p>
    Fill in the information in the fields as shown above, choose the
    department(s) the subject belongs to and click the Add Button.
  </p>
  <p class="text-muted" style="font-size: .8em;">
    Note: The CODE is used to uniquely identity subjects in case of subjects with same
    name but belongs to different departments e.g English is Done By All Primary
    Students, Junior and Senior students in Nigeria so we can have three English
    different codes and belonging to different departments
  </p>

  <hr />
  <h1>Deleting Subjects</h1>
  After creating a subject you will see a box with the subject name and a delete
  button. Click the delete button in order to
  <b class="text-danger">
    permernently remove the subject and all its exam questions
  </b>
  <img src={del} alt="" class="my-2 img-fluid" />
  <NavButtons next="/students" prev="/departments"/>
</main>
