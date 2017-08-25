User.destroy_all
u1 = User.create :email => 'craigsy@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
u2 = User.create :email => 'jonesy@ga.co', :password => 'chicken', :password_confirmation => 'chicken'

Song.destroy_all
s1 = Song.create :name => 'Have A Safe Trip Dear'
s2 = Song.create :name => 'Toxic'
s3 = Song.create :name => 'Carpet Yankers'

Album.destroy_all
a1 = Album.create :name => 'Engine Takes To The Water'
a2 = Album.create :name => 'In The Zone'
a3 = Album.create :name => 'Trance Planet Sugar Mouth'

Artist.destroy_all
r1 = Artist.create :name => 'June of 44'
r2 = Artist.create :name => 'Britney Spears'
r3 = Artist.create :name => 'Shrapnel'

Genre.destroy_all
g1 = Genre.create :name => 'Math rock'
g2 = Genre.create :name => 'Chemical Bollywood'
g3 = Genre.create :name => 'Dad rock'

Mixtape.destroy_all
m1 = Mixtape.create :name => 'Make Out Music'
m2 = Mixtape.create :name => 'Code Jams'
m3 = Mixtape.create :name => 'House cleaning music'

################################################################################
# Associations

a1.songs << s1
a2.songs << s2
a3.songs << s3

r1.songs << s1
r2.songs << s2
r3.songs << s3

s1.genres << g1
s2.genres << g2 << g3
s3.genres << g3

m1.songs << s2 << s3
m2.songs << s2 << s1 << s2 << s3 << s2
m3.songs = [s1, s2, s3]

u1.mixtapes << m1 << m2
u2.mixtapes << m3
