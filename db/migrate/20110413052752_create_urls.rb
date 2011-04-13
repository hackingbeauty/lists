class CreateUrls < ActiveRecord::Migration
  def self.up
    create_table :urls, :primary_key => :id do |t|
      t.integer :id
      t.binary :name
      t.integer :user_id
      t.timestamps
    end
  end

  def self.down
    drop_table :urls
  end
end
