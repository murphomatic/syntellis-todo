<h2><strong>Syntellis To-Do Application</strong></h2>

<p>&nbsp;</p>

<p>Displays a To-Do list, which allows the user to add and remove To-Do items, as well as mark them complete. This application leverages the NgRx library for managing application state using the Redux pattern in Angular.</p>

<p>&nbsp;</p>

<p style="text-align:center"><img alt="To Do Application" height="300" src="https://hrcdn.net/s3_pub/istreet-assets/FNxJjC3vrTWs08LF4-NXnQ/screenshot1.png" width="365" /></p>

<p>&nbsp;</p>

<p>Since the application currently only allows the user to add or delete To-Do items, the product team would like to implement new functionality to allow users to also edit existing To-Do items.&nbsp;</p>

<p>&nbsp;</p>

<p>The new functionality has been partially implemented.&nbsp; The following pieces are already complete:</p>

<ul>
	<li>The user interface has been updated to add an &quot;edit&quot; button, represented by a pencil icon.</li>
	<li>The ToDoDialogComponent has already been modified to accept a ToDo object as input data</li>
	<li>Two new actions have been added to the app.actions.ts file:
	<ul>
		<li>editToDo</li>
		<li>editToDoSuccess</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>

<p>You will need to implement the remaining functionality:</p>

<ul>
	<li>Create an event handler to dispatch the new <strong>editToDo </strong>action from the app component when the edit button is clicked, passing the relevant ToDo object.</li>
	<li>Create an&nbsp;effect in the <strong>AppEffects </strong>(app.effects.ts) class to listen for the <strong>editToDo </strong>action.&nbsp; This effect should present the user with the <strong>ToDoDialogComponent </strong>which displays the relevant ToDo object&#39;s data.&nbsp; You can inspect the existing addToDo$ effect to see the pattern used to display the dialog and dispatch an action based on the user&#39;s response in the dialog.</li>
	<li>Modify the <strong>appReducer </strong>(app.reducer.ts) to listen for the <strong>editToDoSuccess </strong>action.&nbsp; The application state should be modified to replace the existing ToDo object with the one edited by the user.</li>
</ul>

<p>&nbsp;</p>

<p>&nbsp;</p>
