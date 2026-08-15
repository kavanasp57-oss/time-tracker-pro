# Time Tracker Pro

Build a complete, polished, fully functional Stopwatch Web Application based on the task shown in the reference image.

PROJECT GOAL

Create a modern, interactive stopwatch website that allows users to:

Start the stopwatch

Pause the stopwatch

Resume the stopwatch

Reset the stopwatch

Record lap times

View all recorded lap times

Clear lap records

Accurately track elapsed time

The application must be fully functional, not just a UI mockup.

TECHNOLOGY

Use:

React

TypeScript

Tailwind CSS

Modern component-based architecture

Browser-based JavaScript timing APIs

Do NOT add a backend, database, authentication, Supabase, or unnecessary external services because this is a standalone stopwatch application.

CORE FUNCTIONALITY

1. Stopwatch Timer

Display the elapsed time prominently in the center of the page.

Use this format:

HH : MM : SS . MS

Example:
00 : 01 : 24 . 57

Where:

HH = hours

MM = minutes

SS = seconds

MS = milliseconds

The timer must update smoothly and accurately.

Do NOT implement the timer using a simple counter that becomes inaccurate when the browser is delayed. Calculate elapsed time using timestamps such as performance.now() or an equivalent accurate timing approach.

2. Start Button

When the stopwatch is stopped/reset:

Clicking Start begins the stopwatch.

The timer immediately starts counting.

Change the button state appropriately.

3. Pause Button

When the stopwatch is running:

Clicking Pause stops the timer from advancing.

Preserve the current elapsed time.

The user must be able to resume from exactly where it was paused.

4. Resume

After pausing:

The main action button should become Resume.

Clicking Resume continues from the paused elapsed time rather than restarting.

5. Reset Button

Clicking Reset must:

Stop the stopwatch.

Set the timer back to 00 : 00 : 00 . 00.

Clear all lap records.

Return the controls to their initial state.

6. Lap Functionality

While the stopwatch is running or paused, allow the user to record a lap.

Each lap should display:

Lap number

Lap duration

Total elapsed time at that lap

Example:

Lap 1 00:04.52 00:04.52
Lap 2 00:06.31 00:10.83
Lap 3 00:03.75 00:14.58

Calculate each lap duration correctly relative to the previous lap.

7. Clear Laps

Provide a Clear Laps button that removes all recorded laps without affecting the stopwatch timer.

USER INTERFACE

Create a visually impressive, professional-looking stopwatch interface.

The design should feel like a modern productivity/time-tracking application rather than a basic HTML assignment.

Overall Layout

Use a centered responsive application container.

Desktop:

Large centered stopwatch card

Timer at the top/center

Control buttons underneath

Lap history below the controls

Mobile:

Everything must fit comfortably on small screens

Buttons should be touch-friendly

Timer should resize appropriately

Lap table/list should remain readable

VISUAL DESIGN

Use a modern dark theme with a subtle gradient background.

Suggested visual direction:

Deep navy/purple background

Glassmorphism-style stopwatch card

Subtle gradients

Soft shadows

Rounded corners

Clean typography

Minimal but attractive animations

Good spacing

Professional visual hierarchy

Do not make the design overly complicated.

The timer should be the main visual focus.

Use a large monospaced or tabular-numbers font for the timer so that the digits do not shift position while changing.

HEADER

At the top of the application include:

STOPWATCH

Subtitle:

Track your time. Record every lap.

Keep the header clean and minimal.

TIMER CARD

Create a prominent card containing:

STOPWATCH

00 : 00 : 00 . 00

Below the timer show a small status indicator such as:

● Ready

When running:

● Running

When paused:

● Paused

Use subtle animation for the running status.

CONTROL BUTTONS

Create clear, accessible buttons:

Primary:
▶ Start

When running:
⏸ Pause

When paused:
▶ Resume

Secondary:
⟳ Reset

Lap:
◷ Lap

Buttons should:

Have clear hover states

Have active/pressed states

Have smooth transitions

Be keyboard accessible

Have appropriate disabled states

The Lap button should be disabled before the stopwatch has started.

Reset should be disabled when the stopwatch is already at zero and there are no laps.

LAP HISTORY

Below the timer create a section titled:

Lap History

Show:

Lap number

Lap Time

Total Time

Add a Clear Laps button.

When there are no laps, display a clean empty state:

No laps recorded yet
Start the stopwatch and record your first lap.

When laps exist, display them in a clean table on desktop and a responsive list/card layout on mobile.

Highlight the most recent lap subtly.

Also show a small summary section containing:

Total Laps

Best Lap

Average Lap

Calculate these values dynamically.

ACCURACY REQUIREMENTS

The stopwatch must behave correctly in all situations:

Start → timer counts.

Start → Pause → timer stops.

Pause → Resume → timer continues from the same time.

Reset → everything returns to zero.

Multiple pause/resume cycles must preserve accurate elapsed time.

Lap times must remain correct after pause/resume.

Reset must clear laps.

Clearing laps must NOT reset the stopwatch.

Timer should not significantly drift over time.

Avoid creating unnecessary intervals or memory leaks.

Use React state and lifecycle hooks correctly.

Clean up timers when components unmount.

KEYBOARD ACCESSIBILITY

Add useful keyboard shortcuts:

Space → Start/Pause/Resume

L → Record Lap

R → Reset

Do not trigger shortcuts while the user is typing in an input field.

Also add accessible labels/ARIA attributes where appropriate.

ANIMATIONS

Use subtle animations only:

Button hover transitions

Card entrance animation

Running indicator pulse

Lap row appearance animation

Do not overuse animations.

RESPONSIVENESS

The application must work properly on:

Desktop

Laptop

Tablet

Mobile

Make sure there is no horizontal scrolling.

The timer should automatically scale down on smaller screens.

Buttons should stack or wrap appropriately on mobile.

CODE QUALITY

Organize the project cleanly.

Use reusable React components where appropriate, for example:

Stopwatch

TimerDisplay

ControlButtons

LapHistory

LapRow

StatusIndicator

Use TypeScript types/interfaces for lap data and component props.

Keep the code readable and maintainable.

Do not put unnecessary logic directly into the JSX.

IMPORTANT BEHAVIOR

Do not create fake/demo lap data.

Start with an empty stopwatch.

All timer and lap values must be generated dynamically from the actual stopwatch state.

The application must work immediately after loading.

Do not require login or configuration.

Do not use a backend.

Do not use placeholder buttons.

Every visible button must perform its intended function.

FINAL POLISH

Before finishing, thoroughly verify the entire application.

Test:

Start

Pause

Resume

Reset

Lap

Clear Laps

Multiple laps

Multiple pause/resume cycles

Keyboard shortcuts

Mobile responsiveness

Timer accuracy

Empty states

Button disabled states

Fix any TypeScript errors, runtime errors, UI overflow, broken interactions, or console errors.

The final result should look like a polished professional stopwatch web application suitable for submitting as a frontend development task.

Do not stop after creating only the design. Implement the complete working application.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a2a844e5-0780-47cd-9a73-d7e8711b2f5d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
