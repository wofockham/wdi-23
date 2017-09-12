Butterfly.destroy_all
b1 = Butterfly.create :name => 'Monarch', :family => 'Nymphalidae'
b2 = Butterfly.create :name => 'Blue Triangle', :family => 'Blue'

Plant.destroy_all
p1 = Plant.create :name => 'Milkweed'
p2 = Plant.create :name => 'Lantana'

p1.butterflies << b1
p2.butterflies << b2
