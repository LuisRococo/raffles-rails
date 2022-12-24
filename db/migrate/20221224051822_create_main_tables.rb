class CreateMainTables < ActiveRecord::Migration[7.0]
  def change
    create_table :raffles do |t|
      t.string :title, unique: true, null: false
      t.integer :quantity, null: false
      t.timestamps
    end

    create_table(:ticket_statuses, id: false) do |t|
      t.integer :id, null: false
      t.string :name, null: false
    end
    # avoid autoincrement on primary key
    add_index :ticket_statuses, :id, unique: true

    create_table :folio_metadata do |t|
      t.integer :start_number, null: false
      t.integer :actual_number, null: false
      t.belongs_to :raffle
    end

    create_table :folios do |t|
      t.integer :number, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :cellphone, null: false
      t.string :state, null: false
      
      t.belongs_to :raffle
    end
    # add compose index to avoid repetition
    add_index :folios, [:raffle_id, :id]

    create_table :tickets do |t|
      t.integer :number
      t.datetime :reservation_date
      t.timestamps

      t.belongs_to :raffle
      t.belongs_to :ticket_status
      t.belongs_to :folio, optional: true
    end
  end
end
