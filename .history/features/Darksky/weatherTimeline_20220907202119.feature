/**
     * Question - 2: (40-points)
     * 1. Launch darksky.net
     * 2. Verify timeline has 12-data points with 2 hours gap from current hour
     */

     Feature: WeatherTimeline

     Scenario: Verify timeline has 12-data points with 2 hours gap from current hour
        Given I am on darksky homepage
        When I click on Learn about Hotels.com Rewards
        Then I verify hotels rewards opened in a new window
        And I click on join Now
        And I verify form is blank
        And I verify continue button is Not enabled