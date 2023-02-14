<script>
    import NavButtons from "./Componets/NavButtons.svelte";
    import img from "../assets/class.png"
    import del from "../assets/classDel.png"
</script>
<main class="pb-5">
    <div class="breadcrumb">
      Adminstrative Workflow > Managing Classes
    </div>
    <h1>Creating Classes</h1>
    <p>Creating classes is quite simple. first you navigate to <b>Manage School</b> On the sidebar and you will see an <b>"EDIT CLASSES"</b> button click it to expand 
    <br /> Then Proceed to create a class as shown below. <b><i>NOTE: You MUST create the classes in sequential order e.g CLASS1 before CLASS2 e.t.c. This is used by the EMS to know which class comes before which.</i></b>
    <img src={img} alt="Creating a class on Answer-it" class="img-fluid my-2  rounded-3" />
    <b class="text-center">And You Are All Set</b>
    </p>
    <h1>Deleting Classes</h1>
    <p>Deleting classes is as simple as clicking the trash-can icon after the name of the class as shown below</p>
    <img src={del} alt="Deleting a class on Answer-it" class="img-fluid my-2">
    <NavButtons prev="/admins-privilages" next='/departments' />
    
</main>

