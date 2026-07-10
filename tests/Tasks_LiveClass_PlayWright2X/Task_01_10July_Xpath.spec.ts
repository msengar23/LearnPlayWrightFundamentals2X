
import {test , expect} from '@playwright/test';
test("Test for the Login page" , async ({page}) => 
{
 await page.goto("https://katalon-demo-cura.herokuapp.com/");
 await expect(page).toHaveTitle('CURA Healthcare Service');
 let appointmentName = page.locator('xpath=//a[@id="btn-make-appointment"]');
  await appointmentName.click();

  let userName = page.locator('xpath=//input[@id="txt-username"]');
  await userName.fill('John Doe');
  let password = page.locator('xpath=//input[@id="txt-password"]');
  await password.fill('ThisIsNotAPassword');
  let loginButton = page.locator('xpath=//button[@id="btn-login"]');
  await loginButton.click();

// the dropdown locator
  let makeAppointmentDropDown = page.locator('xpath=//select[@id="combo_facility"]');

// Option Select by 'value' attribute 
  await makeAppointmentDropDown.selectOption('Seoul CURA Healthcare Center'); 

// Verify the selected value
  await expect(makeAppointmentDropDown).toHaveValue('Seoul CURA Healthcare Center');

  // for the checkbox
   let checkBox = page.locator('xpath=//input[@id="chk_hospotal_readmission"]');
   await checkBox.check();

// verify checkbox is checked
  await expect(checkBox).toBeChecked();

  // all radio buttons
  const radioButton1 = page.locator('xpath=//input[@id="radio_program_medicaid"]'); 
  const radioButton2 = page.locator('xpath=//input[@id="radio_program_medicare"]');
  const radiobutton3 = page.locator('xpath=//input[@id="radio_program_none"]');

   // select anyone radio button
    await radioButton2.check();

    // verify radio button is checked
    await expect(radioButton2).toBeChecked();

    // select date from daye picker

    let dateInput = page.locator('xpath=//input[@id="txt_visit_date"]');
    dateInput.fill('13/07/2026');
    await expect(dateInput).toHaveValue('13/07/2026');

    const commentInputBox = page.locator('xpath=//textarea[@id="txt_comment"]');
    await commentInputBox.fill('This is for Testing purpose');
    await expect(commentInputBox).toHaveValue('This is for Testing purpose');

    let bookAppointmentButton = page.locator('xpath=//button[@id="btn-book-appointment"]');
    await bookAppointmentButton.click();
    //console.log("Appointment Booked Successfully");
    await expect(page).toHaveTitle('CURA Healthcare Service');

});


