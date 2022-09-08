

    Scenario: Verify Hotels Rewards opened in a new window
        Given I am on hotels homepage
        When I click on Learn about Hotels.com Rewards
        Then I verify hotels rewards opened in a new window
        And I click on join Now
        And I verify form is blank
        And I verify continue button is Not enabled
