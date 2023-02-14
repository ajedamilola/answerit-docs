<script>
  import NavButtons from "./Componets/NavButtons.svelte";
  import idt from "../assets/IDT.png";
  import {Link} from "svelte-routing"
</script>

<main class="pb-5">
  <div class="breadcrumb">Intro > Basic Concepts</div>
  <h1>Basic Concepts</h1>
  <p>
    Lets get you started with some basic and important aspects and concepts of
    Answerit. These conepts are crucial to your usage of this platform.
  </p>
  These Concepts Includes:
  <ol class="text-muted">
    <li>Identification Token</li>
    <li>Classes</li>
    <li>Departments</li>
    <li>Subjects</li>
    <li>School</li>
    <li>Admins</li>
  </ol>

  <h3 class="mt-5">1. Identification Token</h3>
  <p>
    An <b>Identification Token</b> or <b>IDT</b> for short is a 24-character
    long database-generated unique identification Assinged To Every School.
    <b>*No Two Schools Have Save Identification Token</b>. students or
    examination participants uses the identification token to register for thier
    respective schools. For Someone to register under your school they must have
    your own school's IDT(Indentification Token)<br />
    See Image Below:
  </p>
  <img src={idt} alt="Identification Token" class="shadow" />

  <h3 class="mt-5">2. Classes</h3>
  <p>
    Well, classes here are what they are in real life. In Here(same as most
    institutions) classes are used to group students based on thier academic
    level/progress. So basically students of an higher class should have
    completed the previous classes.
  </p>

  <h3 class="mt-3">3. Departments</h3>
  <p>
    A department is a group of students who offer certain types of subjects
    based on a specific field. e.g Science Departments will only feature science
    subjects like Chemistry e.t.c. Students mey only belong to one department. See The <Link to="">Manage Departments</Link>
    for complete details
  </p>
  <h3 class="mt-3">4. Subjects</h3>
  <p>
    A specific branch of knowledge a question is attached to english, as previously mentioned Chemistry, Biology e.t.c. And <b>ALL</b>
    subjects must have at least one department it belongs to.
  </p>
  <h3 class="mt-3">5. School</h3>
  <p>
    The entire institution itself. it houses all admins, students, subjects, deparments e.t.c. No School no exams Simple
  </p>

  Lastly And Most Important

  <h3 class="mt-3">6. Admins</h3>
  <p>
      Admins are the operational managers. they set all the parameters which determines the entire exam prcess of the school.
        See <Link to="/admins-privilages">Admins</Link> for reference
    </p>

   
  <NavButtons next="/admins-privilages" prev="#" />
</main>

<style>
  img {
    border: 1px solid var(--bs-primary);
    border-radius: 22px;
  }
</style>
