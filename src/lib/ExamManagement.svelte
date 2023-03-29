<script>
    import NavButtons from "./Componets/NavButtons.svelte";
    import exams from "../assets/exams.png";
    import { Link } from "svelte-routing";
    import subjects from "../assets/subjectAssign.png"
</script>

<main>
    <div class="breadcrumb">Exam Management > </div>
    <h2>Getting Started With Examination Management</h2>
    <div class="container">
        <img src={exams} class="img-fluid" alt="Answerit Examination" />
    </div>

    <p class="mt-4">
        Before Examniations can be managed there have to be subjects to
        participate in and classes for students to participate from
        <br />
        See <Link to="/subjects">Here</Link> for managing subjects and <Link to="/classes">Here</Link> for managing classes.

        To see the page displayed in the above image you must navigate to the <b>Examination Page</b> from the sidebar. 
        Do not be suprised if you find this page empty and you have subjects and classes created. It just means you have not yet been assigned to subjects yet.
        as a precaution only Admins assigned to subjects can manage that subject. 
    </p>

    <h2 class="mt-5">Subject Assignment</h2>
    <p>Navigate to the <b>Adminstrators</b> page from the sidebar and you should see all the adminstrators on a table including yourself
        <img src={subjects} class="img-fluid" alt='Subject Assignments'/>
        <br />
        On the subject columns check which subject should be assigned to each admin on each row and most importantly click the <b>Save Subject Changes</b> button at the top of the page.
        Here also you can choose which class an admin has access to. <b class="text-info">Students in Classes that an admin has access to can be managed by that admin</b>
        See the <Link to='/students'>Student's Page</Link> for more
    </p>

    <NavButtons prev="/pricing" next="/exam-config"/>
</main>
