/******************** 
 * Spotsymbols Test *
 ********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'SpotSymbols';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from scorecount
points = 0;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
flowScheduler.add(bufferRoutineBegin());
flowScheduler.add(bufferRoutineEachFrame());
flowScheduler.add(bufferRoutineEnd());
const iterationsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(iterationsLoopBegin(iterationsLoopScheduler));
flowScheduler.add(iterationsLoopScheduler);
flowScheduler.add(iterationsLoopEnd);
flowScheduler.add(EndScreenRoutineBegin());
flowScheduler.add(EndScreenRoutineEachFrame());
flowScheduler.add(EndScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Questions/Slide8.png', 'path': 'Questions/Slide8.png'},
    {'name': 'Questions/Slide36.png', 'path': 'Questions/Slide36.png'},
    {'name': 'Questions/Slide40.png', 'path': 'Questions/Slide40.png'},
    {'name': 'Questions/Slide32.png', 'path': 'Questions/Slide32.png'},
    {'name': 'Responses/Slide3.png', 'path': 'Responses/Slide3.png'},
    {'name': 'Questions/Slide20.png', 'path': 'Questions/Slide20.png'},
    {'name': 'Responses/Slide23.png', 'path': 'Responses/Slide23.png'},
    {'name': 'Iterations.xlsx', 'path': 'Iterations.xlsx'},
    {'name': 'Questions/Slide16.png', 'path': 'Questions/Slide16.png'},
    {'name': 'Questions/Slide30.png', 'path': 'Questions/Slide30.png'},
    {'name': 'Questions/Slide34.png', 'path': 'Questions/Slide34.png'},
    {'name': 'Responses/Slide19.png', 'path': 'Responses/Slide19.png'},
    {'name': 'Questions/Slide12.png', 'path': 'Questions/Slide12.png'},
    {'name': 'Questions/Slide26.png', 'path': 'Questions/Slide26.png'},
    {'name': 'Responses/Slide29.png', 'path': 'Responses/Slide29.png'},
    {'name': 'Responses/Slide11.png', 'path': 'Responses/Slide11.png'},
    {'name': 'Responses/Slide39.png', 'path': 'Responses/Slide39.png'},
    {'name': 'Responses/Slide13.png', 'path': 'Responses/Slide13.png'},
    {'name': 'Responses/Slide35.png', 'path': 'Responses/Slide35.png'},
    {'name': 'Questions/Slide22.png', 'path': 'Questions/Slide22.png'},
    {'name': 'Questions/Slide28.png', 'path': 'Questions/Slide28.png'},
    {'name': 'Questions/Slide18.png', 'path': 'Questions/Slide18.png'},
    {'name': 'Questions/Slide10.png', 'path': 'Questions/Slide10.png'},
    {'name': 'Responses/Slide31.png', 'path': 'Responses/Slide31.png'},
    {'name': 'Responses/Slide41.png', 'path': 'Responses/Slide41.png'},
    {'name': 'Questions/Slide4.png', 'path': 'Questions/Slide4.png'},
    {'name': 'Responses/Slide37.png', 'path': 'Responses/Slide37.png'},
    {'name': 'Responses/Slide27.png', 'path': 'Responses/Slide27.png'},
    {'name': 'Responses/Slide5.png', 'path': 'Responses/Slide5.png'},
    {'name': 'Responses/Slide9.png', 'path': 'Responses/Slide9.png'},
    {'name': 'Responses/Slide7.png', 'path': 'Responses/Slide7.png'},
    {'name': 'Questions/Slide24.png', 'path': 'Questions/Slide24.png'},
    {'name': 'Responses/Slide21.png', 'path': 'Responses/Slide21.png'},
    {'name': 'Responses/Slide25.png', 'path': 'Responses/Slide25.png'},
    {'name': 'Questions/Slide2.png', 'path': 'Questions/Slide2.png'},
    {'name': 'Questions/Slide38.png', 'path': 'Questions/Slide38.png'},
    {'name': 'Responses/Slide15.png', 'path': 'Responses/Slide15.png'},
    {'name': 'Responses/Slide17.png', 'path': 'Responses/Slide17.png'},
    {'name': 'Responses/Slide33.png', 'path': 'Responses/Slide33.png'},
    {'name': 'Questions/Slide14.png', 'path': 'Questions/Slide14.png'},
    {'name': 'Questions/Slide6.png', 'path': 'Questions/Slide6.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var WelcomeScreenClock;
var Welcometext;
var key_resp_to_begin;
var bufferClock;
var text;
var trialClock;
var QuestionSeeker;
var ResponseSeeker;
var key_resp;
var EndScreenClock;
var Byebye;
var ExitKey;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  Welcometext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Welcometext',
    text: "Welcome to Mannan's Symbols Experiment\n\nThere will be 20 images displayed. Answer the questions that follow. You have to match the common symbols between the displayed cards.\n\nPress 'space' to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_to_begin = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "buffer"
  bufferClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  QuestionSeeker = new visual.ImageStim({
    win : psychoJS.window,
    name : 'QuestionSeeker', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [720, 405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  ResponseSeeker = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ResponseSeeker', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [720, 405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "EndScreen"
  EndScreenClock = new util.Clock();
  Byebye = new visual.TextStim({
    win: psychoJS.window,
    name: 'Byebye',
    text: "Thank you for taking the experiment!\nYour responses have been recorded. \n\nI tried figuring out a way to display your score... but I failed- sorry about that :(\n\nPlease press 'space' to leave the experiment.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ExitKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_to_begin_allKeys;
var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WelcomeScreen' ---
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_to_begin.keys = undefined;
    key_resp_to_begin.rt = undefined;
    _key_resp_to_begin_allKeys = [];
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(Welcometext);
    WelcomeScreenComponents.push(key_resp_to_begin);
    
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WelcomeScreen' ---
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Welcometext* updates
    if (t >= 0.0 && Welcometext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Welcometext.tStart = t;  // (not accounting for frame time here)
      Welcometext.frameNStart = frameN;  // exact frame index
      
      Welcometext.setAutoDraw(true);
    }

    
    // *key_resp_to_begin* updates
    if (t >= 0.0 && key_resp_to_begin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_to_begin.tStart = t;  // (not accounting for frame time here)
      key_resp_to_begin.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_to_begin.clock.reset();
      key_resp_to_begin.start();
    }

    if (key_resp_to_begin.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_to_begin.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_to_begin_allKeys = _key_resp_to_begin_allKeys.concat(theseKeys);
      if (_key_resp_to_begin_allKeys.length > 0) {
        key_resp_to_begin.keys = _key_resp_to_begin_allKeys[_key_resp_to_begin_allKeys.length - 1].name;  // just the last key pressed
        key_resp_to_begin.rt = _key_resp_to_begin_allKeys[_key_resp_to_begin_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WelcomeScreen' ---
    for (const thisComponent of WelcomeScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_to_begin.stop();
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bufferComponents;
function bufferRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'buffer' ---
    t = 0;
    bufferClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    text.setText('');
    // keep track of which components have finished
    bufferComponents = [];
    bufferComponents.push(text);
    
    for (const thisComponent of bufferComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function bufferRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'buffer' ---
    // get current time
    t = bufferClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of bufferComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bufferRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'buffer' ---
    for (const thisComponent of bufferComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var iterations;
function iterationsLoopBegin(iterationsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    iterations = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Iterations.xlsx',
      seed: undefined, name: 'iterations'
    });
    psychoJS.experiment.addLoop(iterations); // add the loop to the experiment
    currentLoop = iterations;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisIteration of iterations) {
      snapshot = iterations.getSnapshot();
      iterationsLoopScheduler.add(importConditions(snapshot));
      iterationsLoopScheduler.add(trialRoutineBegin(snapshot));
      iterationsLoopScheduler.add(trialRoutineEachFrame());
      iterationsLoopScheduler.add(trialRoutineEnd(snapshot));
      iterationsLoopScheduler.add(bufferRoutineBegin(snapshot));
      iterationsLoopScheduler.add(bufferRoutineEachFrame());
      iterationsLoopScheduler.add(bufferRoutineEnd(snapshot));
      iterationsLoopScheduler.add(iterationsLoopEndIteration(iterationsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function iterationsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(iterations);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function iterationsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    QuestionSeeker.setImage(i_ques);
    ResponseSeeker.setImage(i_res);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(QuestionSeeker);
    trialComponents.push(ResponseSeeker);
    trialComponents.push(key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *QuestionSeeker* updates
    if (t >= 0.0 && QuestionSeeker.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      QuestionSeeker.tStart = t;  // (not accounting for frame time here)
      QuestionSeeker.frameNStart = frameN;  // exact frame index
      
      QuestionSeeker.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (QuestionSeeker.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      QuestionSeeker.setAutoDraw(false);
    }
    
    // *ResponseSeeker* updates
    if (t >= 3.5 && ResponseSeeker.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ResponseSeeker.tStart = t;  // (not accounting for frame time here)
      ResponseSeeker.frameNStart = frameN;  // exact frame index
      
      ResponseSeeker.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 3.75 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['0', '1', '2', '3', '4', '5', '6'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == i_ans) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(i_ans)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // Run 'End Routine' code from scorecount
    if (key_resp.corr) {
        points += 1;
    }
    psychoJS.experiment.addData("score", points);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _ExitKey_allKeys;
var EndScreenComponents;
function EndScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EndScreen' ---
    t = 0;
    EndScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ExitKey.keys = undefined;
    ExitKey.rt = undefined;
    _ExitKey_allKeys = [];
    // keep track of which components have finished
    EndScreenComponents = [];
    EndScreenComponents.push(Byebye);
    EndScreenComponents.push(ExitKey);
    
    for (const thisComponent of EndScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EndScreen' ---
    // get current time
    t = EndScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Byebye* updates
    if (t >= 0.0 && Byebye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Byebye.tStart = t;  // (not accounting for frame time here)
      Byebye.frameNStart = frameN;  // exact frame index
      
      Byebye.setAutoDraw(true);
    }

    
    // *ExitKey* updates
    if (t >= 0.0 && ExitKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExitKey.tStart = t;  // (not accounting for frame time here)
      ExitKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      ExitKey.clock.reset();
      ExitKey.start();
    }

    if (ExitKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = ExitKey.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _ExitKey_allKeys = _ExitKey_allKeys.concat(theseKeys);
      if (_ExitKey_allKeys.length > 0) {
        ExitKey.keys = _ExitKey_allKeys[_ExitKey_allKeys.length - 1].name;  // just the last key pressed
        ExitKey.rt = _ExitKey_allKeys[_ExitKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EndScreen' ---
    for (const thisComponent of EndScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    ExitKey.stop();
    // the Routine "EndScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
