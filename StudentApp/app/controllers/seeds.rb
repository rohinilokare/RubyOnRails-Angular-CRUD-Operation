1.upto(10) do |i|
  Student.create(roll_no: "#{i}",
               name: "name#{i}",
               address: "address#{i}",
               standard: "std #{i}")
end
