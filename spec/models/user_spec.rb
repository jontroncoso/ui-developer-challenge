require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  it 'saves all attributes' do
    user = User.new({first_name: 'Philadelphia', last_name: 'Collins', username: 'baaaam', email: 'phil@collins.info', password: 'peanutbutterandjaaaam'})
    user.save!
    expect(user).to match({first_name: 'Philadelphia', last_name: 'Collins', username: 'baaaam', email: 'phil@collins.info', password: 'peanutbutterandjaaaam'})
  end
end
