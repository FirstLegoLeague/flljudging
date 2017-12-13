## Rubrics
- The Rubrics presented in the software should visually match the physical styling and colors of the official PDF rubrics.
  - Exceptions granted to vertically expand the rubrics to make space for judge comments, however, this is constrained by the printing requirements below.
- Data entry must match what is allowed on the PDF form:
  - Users can only select one item per row of the rubric.  These items match the column names: Beginning, Developing, Accomplished, Exemplary, and Not Demonstrated (ND)
    - Users cannot select in-between values on rubrics  
    - UI Feedback should easily let the user know what column was selected for each row
    - Users must select a value for all rows.
  - The three text based comments boxes.  (Plain text minimum, RTF optional)
    - UI should inform users that these comments are returned to teams.  Additionally, UI should encourage positive and constructive comments to provide back to teams.
  - Judges can pick one or more of the three strengths.  
- Optional field for private judges notes which are used for deliberations only.
  - UI must clearly indicate the difference between private and returned comments.
- Needs to have the ability to print / export rubrics in standard PDF format for returning to teams.  
  - Printability is the minimum requirement, however, support for digital return is desirable.
- At no point should the rubric display a calculated score for a team.  
- Judges should be able to select or enter a team for each rubric.  
  - If supported, the rubric module can pull information from scheduling and registration modules to autocomplete team information
- Rubrics Module should display a timer for judges to use to monitor their sessions and keep on time.
- The Rubrics module should allow judges to nominate teams for particular awards.
- The Rubrics Module should also have a way of tracking judges that submitted rubrics (IE: through user authentication, or through initials or digital signature)

## Judge Ranking
If a software package supports digital rubrics, it shall support the following
- Judges shall be able to rank their teams, either in real time (preferably), or after all teams have been seen.
- Interface should be as easy to use as possible, with preference on drag and drop.  
- At no point should the interface automatically rank teams by a score from the rubric.
  - Algorithms may be used to guide rankings, but final placement should be by user input.
- Judging Ranking System should allow judges to review award nomination

## Deliberations
In general, the deliberations module should replicate the features provided in Judging Lite provided by FIRST.
- The deliberations module must support both paper ranking entry and digital ranking entry from the Judging module listed above.  Additionally, any award nominations should be automatically imported as well as support manual entry.  
  - Rankings from software judging modules should automatically populate in the deliberations interface.
  - Judge Advisor should have ability to modify all ranking values if needed.
- The deliberations module should support real-time, automatic import of robot game rankings.
- Overall rankings should be derived from the rank-sum formula as used in the Judging Lite spreadsheet, which is used to guide discussion.
- Module must support addition of local regional awards.
- The deliberations module shall enforce all FIRST LEGO League rules and policies:
  - All Core Awards must be decided through a deliberative process and not a numeric process alone.  The Judge Advisor must confirm all award assignments.  
  - Robot Game Award will be decided by Robot Game Rankings
  - A single team cannot win more than one Core Award (with the exception of Robot Game)
  - Advancement and Champion’s winner must meet the Hurdle requirements.  
    - Module must support entry of the Advancement Percentage.
- Module should support advancement selection and discussion.

## Scripts
- Once awards have been decided and finalized, the Deliberations module should support the ability to enter scripts for awards.
- Once all awards have been entered, the system should be able to print / export for Closing Ceremonies

## Certification and Checkout
- The Deliberations module should support a final checkout and certification of all data from judging.  
- For Digital Rubrics and Rankings, the Judge Advisor should be able to view all rubrics for review and auditing.  The Judge Advisor should be able to edit if needed.
- The Judge Advisor should be able to review all scripts before finalizing for printing. 
