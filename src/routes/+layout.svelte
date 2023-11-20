<svelte:head>
    <meta property="description" content="Exploring the conceptualized self's role in mental health.">
</svelte:head>

<style>
    div#wrapper {
    /* layout */
    display: flex;
    flex-flow: column nowrap;
    margin: 0;
    min-height: 100vh;
    }

    header {
        /* fashion */
        background: var(--primary-1);
        
        /* layout */
        align-items: center;
        display: flex;  
        flex: 0 0 auto;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 2em;
        
        /* position: sticky;
        top: 0; */
    }

    header h1 {
        text-align: center;
        margin: 1ex 0;
    }

    nav {
        /* layout */
        align-items: center;
        display: flex;
        gap: 1.5ex 1.5em;
        flex-flow: row nowrap;
        justify-content: flex-end;

        /* fashion */
        font-family: var(--heading-font);
        text-transform: capitalize;
        
    }

    nav a {
        color: var(--primary-3);
        text-decoration: none;
    }

    main {
        /* fashion */
        
        /* layout */
        flex: 10 0 auto;
    }

    footer {
        /* fashion */
        background: var(--primary-2);
        
        /* layout */
        align-items: center;
        display: flex;
        flex-flow: row wrap;
        gap: 1ex 2.5em;
        justify-content: center;
        padding: 2em;
    }

    footer a {
        color: var(--primary-1);
        text-transform: capitalize;
    }

    footer a:hover {
        color: var(--primary-0)
    }

    footer small {
        /* position */
        flex: 1 0 100%;
        text-align: right;

        /* layout */
        padding-top: 1em;
    }


    /* MOBILE */
    @media (max-width: 900px) {
        header {
            flex-flow: column nowrap;
            padding: 1em;
            overflow: visible;
        }

        nav {
            flex-wrap: wrap;
            position: sticky;
            top: 0;
        }

        main {
            padding-top: 2em;
            margin-trim: block;
        }
    }
</style>
<div id="wrapper">
    <!-- top-level nav/header -->
    <header>
        <h1>the conceptualized self</h1>
        <nav>
            <a href="/">home</a>
            <a href="/about">about</a>
            <a href="/lesson">learn</a>
            <a href="/window">window</a>
            <a href="/sources">sources</a>
        </nav>
    </header>

    <main>
        <slot></slot>
    </main>

    <!-- footer links -->
    <footer>
        <a href="/privacy-policy">privacy policy</a>
        <a href="https://github.com/crane-9/psy202-conceptualized-self">see source code</a>
        <a href="mailto:hello@cranepresents.dev">contact site owner</a>
        <small>Built by Crane Khavari, 2023.</small>
    </footer>
</div>
