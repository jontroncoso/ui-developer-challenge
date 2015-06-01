require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  it 'saves all attributes' do
    user = User.new({first_name: 'Philadelphia', last_name: 'Collins', username: 'baaaam', email: 'phil@collins.info', password: 'peanutbutterandjaaaam'})
    user.save!
    # expect(user).to match({first_name: 'Philadelphia', last_name: 'Collins', username: 'baaaam', email: 'phil@collins.info', password: 'peanutbutterandjaaaam'})
    expect(user).to be_valid
    expect(user.first_name).to eq 'Philadelphia'
    expect(user.last_name).to eq 'Collins'
    expect(user.username).to eq 'baaaam'
    expect(user.email).to eq 'phil@collins.info'
  end
end
