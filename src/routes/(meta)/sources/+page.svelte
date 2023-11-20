<svelte:head>
    <meta property="description" content="See the project's sources.">
    
    <title>Sources</title>
</svelte:head>

<style>
    :root {
        --accent-1-more-transparent: color-mix(in srgb, var(--accent-1) 20%, transparent);
    }

    p {
        text-align: left;
        margin: 0;
        margin-left: 2em;
        text-indent: -2em;
    }

    a {
        word-break: break-all;
    }

    div {
        padding: 1ex;
    }

    :target {
        background-color: var(--accent-1-more-transparent);
        border-radius: 3px;
        animation: highlight 1s ease-out;
    }

    /* Desktop only */
    @media (min-width: 900px) {
        p {
            margin: auto;
            width: 75%;
        }
    }

    @keyframes highlight {
        0% { 
            background-color: var(--accent-1-transparent);
        } 100% { 
            background-color: var(--accent-1-more-transparent);
        }
    }
</style>

<section>
    <h2>References</h2>

    <div id="blackledge">
        <p>Blackledge, J. T. (2003). An introduction to relational frame theory: Basics and applications. <cite>The Behavior Analyst Today</cite>, 3(4), 421-433. <a target="_blank" href="https://doi.org/10.1037/h0099997">https://doi.org/10.1037/h0099997</a></p>
    </div>
    
    <div id="damasio">
        <p>Damasio, A. (2010). <cite>Self comes to mind: Constructing the conscious brain.</cite> Pantheon/Random House.</p>
    </div>
    
    <div id="hayes">
        <p>Hayes, S. (n.d.). The Six Core Processes of ACT. Association for Contextual Behavioral Science. <a target="_blank" href="https://contextualscience.org/the_six_core_processes_of_act">https://contextualscience.org/the_six_core_processes_of_act</a></p>
    </div>
    
    <div id="noureen">
        <p>Noureen, S., Malik, S. Conceptualized-self and depression symptoms among university students: Mediating role of cognitive fusion. <cite>Current Psychology</cite> 40, 5106-5114 (2021). <a target="_blank" href="https://doi.org/10.1007/s12144-019-00450-3">https://doi.org/10.1007/s12144-019-00450-3</a></p>
    </div>
    
    <div id="mind-tools">
        <p>Mind Tools Ltd. (n.d.). <cite>The Johari Window</cite>. Mind Tools. <a target="_blank" href="https://www.mindtools.com/au7v71d/the-johari-window">https://www.mindtools.com/au7v71d/the-johari-window</a></p>
    </div>
</section>
