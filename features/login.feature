Feature: Oracle Login Test

@login
Scenario: Invalid login with user
  Given User has opened Oracle Profile page
  When User inputs <email> as the email
  And User inputs <password> as the password
  And User presses the sign in button
  Then User sees invalid credentials message

  Examples:
      | email                 | password      |
      | abracadabra@gmail.com | P@44w0rdd     |
      # | dhfdhfhdgfg@gmail.com | password123   |
      # | jjdhfjdhfdd@gmail.com | gorbisDuraks  |