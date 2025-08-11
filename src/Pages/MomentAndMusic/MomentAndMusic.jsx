import {
  Music,
  Home,
  Drama,
  Heart,
  Star,
  Lightbulb,
  Drum,
  BookOpen,
  FlaskConical,
  Construction,
  Laptop,
  Calculator,
  Globe,
  Puzzle,
  Palette,
  Camera,
  FileText,
  FileSliders,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

export default function MovementMusicPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" /> Creative
                Movement and Music Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Movement and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Music in Early Childhood
                </span>{" "}
                Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fostering creativity, self-expression, and developmental growth
                through rhythmic and musical experiences
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://i.pinimg.com/736x/75/95/8c/75958c4d78ec33db1d109b8fb1f82c78.jpg"
                  alt="Children dancing and playing music"
                  width={500}
                  height={100}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-15 -left-20 w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Music className="w-12 h-12 text-blue-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Drum className="w-10 h-10 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" /> Importance of Movement
                  and Music in Facilitating Creativity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Movement and music are crucial for young children’s overall
                  growth and creativity. Through movement, children build body
                  awareness, spatial reasoning, and fine and gross motor skills,
                  all while expressing emotions and ideas without words (Niland,
                  2015). Music provides a strong medium for sensory exploration,
                  emotional regulation, and social connection. The Early Years
                  Learning Framework (EYLF V2.0) recognizes music and movement
                  as key ways for children to explore identity, express
                  feelings, and engage their imagination (ACECQA, 2022). When
                  children move rhythmically or sing, they link cognitive,
                  physical, and emotional processes, which encourages innovative
                  thinking and problem-solving (Howard & Mayesky, 2022).
                  Additionally, engaging in diverse musical experiences expands
                  children’s cultural awareness, fostering inclusivity and
                  respect through shared creative expression. Overall, music and
                  movement nurture curiosity, risk-taking, and joyful discovery
                  in early childhood.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" /> Creativity Theories and
                  Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Gardner’s (1983) Multiple Intelligences theory emphasizes
                  musical-rhythmic and bodily-kinaesthetic intelligences as
                  separate but related areas of creativity. Vygotsky’s (1978)
                  socio-cultural theory stresses that movement and music provide
                  social frameworks where children co-construct meaning,
                  language, and cultural understanding. Smilansky’s (1990)
                  research on sociodramatic play further supports movement and
                  music as imaginative tools for role play and symbolic
                  thinking. The Reggio Emilia approach honours these “hundred
                  languages” of children, advocating for integrated sensory,
                  artistic, and physical experiences as the foundation of
                  learning (Edwards, Gandini & Forman, 2012). In early childhood
                  education, these views position teachers as facilitators who
                  create responsive environments that encourage children’s
                  independent exploration of sound, rhythm, and movement,
                  allowing them to express their unique ideas.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Drum className="w-6 h-6 mr-3" /> Resources, Materials, and
                  Digital Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  To promote creativity in movement and music, early childhood
                  educators can offer a variety of tactile and auditory
                  resources. These include scarves, ribbons, bean bags, drums,
                  shakers, tambourines, xylophones, and everyday objects
                  repurposed as instruments (Niland, 2015). Open spaces and soft
                  mats support safe movement exploration. Digital tools, such as
                  music composition apps (e.g., GarageBand, Chrome Music Lab),
                  enable children to experiment with sounds, layering, and
                  recording, thereby building both digital literacy and
                  creativity (Howard & Mayesky, 2022). Video and audio recording
                  devices can document performances, fostering reflection and
                  sharing. Importantly, resources should be adaptable,
                  culturally diverse, and easily accessible to empower
                  children’s improvisation and collaboration. Educators play a
                  vital role by modelling rhythmic patterns, introducing new
                  movements, and asking open-ended questions to deepen
                  children’s engagement and creative problem-solving.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Scarves & Ribbons
                  </span>
                  <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Percussion Instruments
                  </span>
                  <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Music Apps
                  </span>
                  <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Open Spaces
                  </span>
                  <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Recording Devices
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" /> Learning Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      0-2 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mr-3">
                          1
                        </span>{" "}
                        Instrument Exploration
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Provide infants with safe percussion instruments such as
                        shakers or drums to explore sounds by shaking, tapping,
                        or banging. Motivate imitation and rhythmic play.
                        Supports auditory discrimination, fine motor
                        development, and cause-and-effect understanding (Niland,
                        2015).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm mr-3">
                          2
                        </span>{" "}
                        Gentle Movement with Music
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        caretakers rock, sway, or bounce infants to gentle
                        music, promoting vestibular growth and emotional
                        bonding. Enhances sensory integration, rhythm awareness,
                        and emotional security (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      2-3 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm mr-3">
                          3
                        </span>{" "}
                        Freeze Dance
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children dance freely to music and freeze when the music
                        stops, practicing impulse control and body awareness.
                        Builds listening skills, self-regulation, and
                        coordination (Gardner, 1983).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mr-3">
                          4
                        </span>{" "}
                        Action Songs
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Use songs like “Head, Shoulders, Knees, and Toes” where
                        children follow movements corresponding to lyrics,
                        encouraging language and sequencing skills. Supports
                        motor planning, vocabulary development, and memory
                        (Vygotsky, 1978).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      3-5 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mr-3">
                          5
                        </span>{" "}
                        Rhythm Repetition Game
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The educator claps or taps out rhythmic patterns, and
                        the children imitate them using their body movements or
                        instruments. Enhances auditory memory, pattern
                        recognition, and creative expression (Niland, 2015).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm mr-3">
                          6
                        </span>{" "}
                        Story Dance
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children explain a story through movement and dance,
                        creating gestures to represent characters or events.
                        Grows symbolic thinking, narrative skills, and
                        imaginative (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      6-8 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm mr-3">
                          7
                        </span>{" "}
                        Song Composition
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Small groups write simple lyrics and form melodies using
                        instruments or digital apps, then perform or record
                        their song. Supports collaboration, creative expression,
                        and understanding of musical structure (Gardner, 1983).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mr-3">
                          8
                        </span>{" "}
                        Cultural Dance Exploration
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children research and get to learn traditional dances
                        from various cultures, and get to share them with peers,
                        fostering multicultural awareness and respect. Helps
                        cultural inclusivity, confidence, and physical
                        creativity (Edwards et al., 2012).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Digital Evidence & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 text-lg">
                  This section will include video recordings and timelines of
                  enacted learning experiences, demonstrating practical
                  application of movement and music activities across different
                  age groups.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* //link */}
                  <Link to="# " target="_blank" rel="noopener noreferrer">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-purple-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        Video Recording 1
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Finger puppet song time ( 2-3)
                      </p>
                    </div>
                  </Link>
                  {/* //link */}
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100  text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        Video Recording 2
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Emotion masks drama (3-5 years)
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Critical Reflection
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <p className="text-gray-900 leading-9 font-extrabold mb-6">
                    Performing these creative learning experiences deepened my
                    understanding of how intentional guidance fosters children’s
                    creative development in movement and music. In the “Action
                    Songs” activity, one aspect that went well was how I
                    integrated clear verbal instructions and demonstrated each
                    movement, which helped children connect language with
                    physical actions and enhanced their engagement. Similarly,
                    during the “Rhythm Claps” activity, I effectively modelled
                    varied clapping patterns, encouraging children to listen
                    closely and experiment with rhythm, which supported their
                    sense of timing and coordination. However, one area for
                    improvement was pacing; at times, the “Action Songs” moved
                    too quickly for the younger children, causing some to feel
                    rushed. I could also have offered more encouragement for
                    children to create their movements or rhythms, rather than
                    following only the modelled ones. If I were to do these
                    activities again, I would slow down the tempo of songs and
                    allow more opportunities for child-led improvisation. I
                    would also introduce visual cues or gestures to support
                    comprehension and expression. These reflections align with
                    Vygotsky’s (1978) idea of scaffolding within the zone of
                    proximal development and Gardner’s (2011) theory of multiple
                    intelligences, reinforcing the value of balancing adult
                    support with children’s autonomy to nurture creativity
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-4 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="text-lg">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col space-y-3">
                <Link to="/">
                  <Button className="w-full justify-start bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 shadow-sm">
                    <Home className="h-4 w-4 mr-2" /> Home Page
                  </Button>
                </Link>
                <Link to="/drama-puppetry">
                  <Button className="w-full justify-start bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 hover:from-purple-200 hover:to-purple-300 shadow-sm">
                    <Drama className="h-4 w-4 mr-2" /> Drama & Puppetry
                  </Button>
                </Link>
                <Link to="/art">
                  <Button className="w-full justify-start bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 hover:from-pink-200 hover:to-pink-300 shadow-sm">
                    <Palette className="h-4 w-4 mr-2" /> Art
                  </Button>
                </Link>
                <Link to="/language-literacy">
                  <Button className="w-full justify-start bg-gradient-to-r from-green-100 to-green-200 text-green-700 hover:from-green-200 hover:to-green-300 shadow-sm">
                    <BookOpen className="h-4 w-4 mr-2" /> Language & Literacy
                  </Button>
                </Link>
                <Link to="/science">
                  <Button className="w-full justify-start bg-gradient-to-r from-red-100 to-red-200 text-red-700 hover:from-red-200 hover:to-red-300 shadow-sm">
                    <FlaskConical className="h-4 w-4 mr-2" /> Science
                  </Button>
                </Link>
                <Link to="/engineering">
                  <Button className="w-full justify-start bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 hover:from-yellow-200 hover:to-yellow-300 shadow-sm">
                    <Construction className="h-4 w-4 mr-2" /> Engineering
                  </Button>
                </Link>
                <Link to="/technologies">
                  <Button className="w-full justify-start bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-700 hover:from-cyan-200 hover:to-cyan-300 shadow-sm">
                    <Laptop className="h-4 w-4 mr-2" /> Technologies
                  </Button>
                </Link>
                <Link to="/mathematics-numeracy">
                  <Button className="w-full justify-start bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 hover:from-indigo-200 hover:to-indigo-300 shadow-sm">
                    <Calculator className="h-4 w-4 mr-2" /> Mathematics &
                    Numeracy
                  </Button>
                </Link>
                <Link to="/humanities-social-sciences">
                  <Button className="w-full justify-start bg-gradient-to-r from-teal-100 to-teal-200 text-teal-700 hover:from-teal-200 hover:to-teal-300 shadow-sm">
                    <Globe className="h-4 w-4 mr-2" /> Humanities & Social
                    Sciences
                  </Button>
                </Link>
                <Link to="/integrated-curriculum">
                  <Button className="w-full justify-start bg-gradient-to-r from-lime-100 to-lime-200 text-lime-700 hover:from-lime-200 hover:to-lime-300 shadow-sm">
                    <Puzzle className="h-4 w-4 mr-2" /> Integrated Curriculum
                  </Button>
                </Link>
                <Link to="/reference">
                  <Button className="w-full justify-start bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 hover:from-orange-200 hover:to-orange-300 shadow-sm">
                    <FileSliders className="h-4 w-4 mr-2" /> References
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
