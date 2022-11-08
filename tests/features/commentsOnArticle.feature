Feature: Commenting on new article page

    @automated
    Scenario: Verify comment icon is shown for articles in top news
        Given user navigates to news homepage
        Then  the article with comments enabled should have comments icon
    
    @automated
    Scenario: Verify comments icon and comments count shown on top of article page
        Given user is on article page with comments enabled
        Then  verify comments icon is shown below headline
        And   total comments count is displayed below headline

    @manual
    Scenario: Click on comments icon should scroll page to commenting section
        Given user clicks comments icon below headline
        Then  page is scrolled to commenting section below article

    @manual
    Scenario: Verify View Comments button and comments count shown in commenting section for article page
        Given user is on article page with comments enabled
        Then  verify View Comments button is shown
        And   total comments count is displayed

    @manual
    Scenario: Verify clicking on View comments button should expand commenting section
        Given user clicks on View Comment button
        When  comments panel gets expanded
        Then  comments panel should contain Sign In and Register option
        And   total comments count is displayed inside panel
        And   comments panel should contain house rules link
        And   comments panel should sorting drop down
    
    @manual
    Scenario: Clicking on reply should shown sign in or register link
        Given user clicks on reply for any comments displayed
        Then  the block should expand 
        And   show sign in and register link
    
    @manual
    Scenario: Clicking on like/dislike should shown sign in or register link
        Given user clicks on like icon for any comments displayed
        Then  the block should expand 
        And   show sign in and register link
        When  user clicks on dislike icon for any comments displayed
        Then  the block should expand 
        And   show sign in and register link
    
    @manual
    Scenario: Verify register links opens new user registeration page
        Given user clicks on Register link
        Then  user is navigated to new account creation page
    
    @manual
    Scenario: Verify sign in from comments panel
        Given user clicks on Sign In link
        When  user signs in with BBC account
        Then  verify signed in status with user name is shown
        And   Add your comment input box is shown

    @manual
    Scenario: Verify user should be able to add new comment
        Given user is signed in
        When  user adds text in comments input box
        Then  Post and Cancel button should get displayed
        And   remaining character count out of 400 should be shown
        And   clicking on post button should get comments posted successfully
    
    @manual
    Scenario: User should be able to reply on any comment
        Given user is signed in
        When user clicks on reply for any comment
        Then Reply input should be shown
        And user must be able to add reply successfully
    
    @manual
    Scenario: User should be able to reply on any comment
        Given user is signed in
        When user clicks on reply for any comment
        Then Reply input should be shown
        And user must be able to add reply successfully

    @manual
    Scenario: User should be able to like/dislike on any comment
        Given user is signed in
        When user clicks on like for any comment
        Then Like icon should highlight and like count should get incremented
        When user clicks on dislike for any comment
        Then Dislike icon should highlight and like count should get incremented    
