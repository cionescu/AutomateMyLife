require "selenium-webdriver"
class Ums
  attr_reader :driver

  def initialize
    @driver = Selenium::WebDriver.for :phantomjs
  end

  def run
    authenticate
    navigate_to_results

    rows = driver.find_element(class: 'tabel_info').find_elements(tag_name: "tr")

    marks = extract_marks rows

    driver.quit

    marks
  end

  private

  def authenticate
    driver.navigate.to "http://www.univ-ovidius.ro/ums/do/secure/inregistrare_user"

    username = driver.find_element(id: 'j_username')
    username.send_keys Settings.ums_username

    password = driver.find_element(id: 'j_password')
    password.send_keys Settings.ums_password

    password.submit
  end

  def navigate_to_results
    driver.navigate.to "http://www.univ-ovidius.ro/ums/do/secure/vizualizare_rezultate_evaluari"

    driver.find_element(link_text: 'Note').click
  end

  def extract_marks rows
    marks = {}
    rows.each_with_index do |row, idx|
      next if idx.zero?
      cols = row.find_elements(tag_name: "td")

      subject = cols[3].text
      mark = cols[6].text.to_i

      marks[subject] = mark
    end
    marks
  end
end
