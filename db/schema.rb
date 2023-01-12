# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_12_165050) do
  create_table "folio_metadata", force: :cascade do |t|
    t.integer "start_number", null: false
    t.integer "actual_number", null: false
    t.integer "raffle_id"
    t.index ["raffle_id"], name: "index_folio_metadata_on_raffle_id"
  end

  create_table "folios", force: :cascade do |t|
    t.integer "number", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "cellphone", null: false
    t.string "state", null: false
    t.integer "raffle_id"
    t.index ["raffle_id", "id"], name: "index_folios_on_raffle_id_and_id"
    t.index ["raffle_id"], name: "index_folios_on_raffle_id"
  end

  create_table "raffles", force: :cascade do |t|
    t.string "title", null: false
    t.integer "quantity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ticket_statuses", id: false, force: :cascade do |t|
    t.integer "id", null: false
    t.string "name", null: false
    t.index ["id"], name: "index_ticket_statuses_on_id", unique: true
  end

  create_table "tickets", force: :cascade do |t|
    t.integer "number"
    t.datetime "reservation_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "raffle_id"
    t.integer "ticket_status_id"
    t.integer "folio_id"
    t.index ["folio_id"], name: "index_tickets_on_folio_id"
    t.index ["raffle_id"], name: "index_tickets_on_raffle_id"
    t.index ["ticket_status_id"], name: "index_tickets_on_ticket_status_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
