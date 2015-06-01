require 'rails_helper'

describe 'The Challenge', js: true do
  before do
    visit(root_path)
  end
  it "loads fine", js: true do
    expect(page).to have_http_status(:success)
    expect(page).to_not have_errors
  end

  it 'toggles the plans', js:true do
    expect(page).to_not have_errors
    click_on 'Review Other Plans'
    expect(page).to_not have_errors
    expect(page).to have_content('$9.95')
  end

  it 'fails to submit on error', js:true do
    fill_in 'Password', with: 'testpassword1'
    fill_in 'Confirm Password', with: 'testpassword2'
    click_on 'Sign up'
    expect(page).to_not have_errors
    expect(page).to_not have_content('Congratulations')
  end

  it 'submits correctly', js:true do
    expect(page).to_not have_content('Congratulations')
    fill_in 'First Name', with: 'John'
    fill_in 'Last Name', with: 'Smith'
    fill_in 'Username', with: 'johnsmith'
    fill_in 'Email Address', with: 'jon@smith.com'
    fill_in 'Password', with: 'testpassword'
    fill_in 'Confirm Password', with: 'testpassword'
    click_on 'Sign up'
    expect(page).to_not have_errors
    expect(page).to have_content('Congratulations')
  end
end