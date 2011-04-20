class CreateNeurons < ActiveRecord::Migration
  def self.up
    create_table :neurons do |t|
      t.string :url

      t.timestamps
    end
  end

  def self.down
    drop_table :neurons
  end
end
