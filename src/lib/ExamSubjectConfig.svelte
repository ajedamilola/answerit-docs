<script>
    import NavButtons from "./Componets/NavButtons.svelte";
    import config from "../assets/ExamConfig.png";
</script>

<main>
    <div class="breadcrumb">Examinations > Configurations</div>
    <h1>Examination Configuration</h1>
    <img src={config} class="img-fluid" alt="answerit exam configurations" />
    <p>There afre three arrows in the picture above.</p>
    <ol>
        <li>
            <p>
                the first pointing the question storage usage. depending on your
                plan, there are limits to the amount of space your questions can
                take (mainly uploaded question illustrative pictures).
            </p>
        </li>
        <li>
            <p>
                The second arrow shows the red button for erasing ALL questions
                on the school's account. this is helpul during the start of a
                new term
            </p>
        </li>
        <li>
            And the last arrow shows the box for managing the settings for a
            subject's examination.The Notable fields here are the
            <ul>
                <li>Duration</li>
                <li>Default Score</li>
                <li>Minimum Acore</li>
                <li>Duration</li>
                <li>The Manage Questions Button</li>
                <li>The Clear questions button</li>
            </ul>
        </li>
    </ol>
</main>
