<script>
  import NavButtons from "./Componets/NavButtons.svelte";
  import price from "../assets/price1.png"
  import { Link } from "svelte-routing";
</script>

<main class="pb-5">
  <div class="breadcrumb">Adminstrative Workflow > Plans and Pricing</div>
  <p>
    There are limits on the amount of data you can have on your school such as
    the number of students, subjects, departments, e.t.c An higher subscription
    plan equates higher capacity. a subscription last 30days but on creation of
    a school you will have a 15day free trial for that school. <br />
    Before your plan expires you will be notified at top of your dashboard page.
    and when it does expire you wont be able to manage your school's data on Answerit
    but sure your data is always intact.
    <br />
    <b>Pro Tip: </b> you can let your plan expire if you are temporirily not
    using the platform Like on holidays.
    <br />
    When your plan expires you will see a warning message at your dashboard
  </p>
  <p>
    and from here you can renew your subscription. or you can renew your
    subscription via the <Link to="/settings">School Management</Link> page below are the list of plans we have
  . To renew your plan just click on the <b class="text-info">CHANGE PLAN / RENEW</b> button at the bottom part of the <b>school Information</b> tab
  </p>
  <img src={price} class="img-fluid mt-2" alt='answerit pricing'/>
  <NavButtons next="/exams" prev="/management"/>
</main>
