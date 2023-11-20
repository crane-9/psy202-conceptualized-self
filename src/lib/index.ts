// Module import.
import * as database from "./database";
import * as errors from "./errors";
import * as utils from "./utils";

import { showModal, popupText, titleText } from "./modalOptions";

// Types import.
import type * as types from "./types";

// Component import.
import CaptionedImage from "./CaptionedImage.svelte";
import FloatingExamples from "./FloatingExamples.svelte";
import InfoBox from "./InfoBox.svelte";
import JohariGrid from "./JohariGrid.svelte";
import JohariWindow from "./JohariWindow.svelte";
import LessonNav from "./LessonNav.svelte";
import Modal from "./Modal.svelte";
import VocabWord from "./VocabWord.svelte";

// Others.
let words = ['adventurous', 'anxious', 'artistic', 'business-minded', 'caretaker', 'direct', 'driven', 'energetic', 'extrovert', 'flaky', 'fulfilled', 'impulsive', 'intelligent', 'introvert', 'laid-back', 'noncommittal', 'organized', 'outsider', 'people-pleaser', 'self-centered', 'short-tempered', 'stubborn', 'tense', 'thoughtful', 'tolerant', 'traditional', 'troubled', 'uneducated', 'unreliable', 'whimsical'];

const MAX_TRAITS = 5;



export {
    CaptionedImage,
    database,
    errors,
    FloatingExamples,
    InfoBox,
    JohariGrid,
    JohariWindow,
    LessonNav,
    MAX_TRAITS,
    showModal, popupText, titleText,
    Modal,
    utils,
    words,
    VocabWord,
};

export type { types }
