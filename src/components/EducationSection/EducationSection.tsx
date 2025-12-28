import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>B.E. in Computer Science Engineering</CardTitle>
              <p className="text-sm text-muted-foreground">
                Chandigarh University — 2024 – Present
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Specialized in <strong>Flutter Developer</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Developed PulseX - A Crypto Currency app with AI</li>
                <li>Working on Zippy - 10 mins delivery to rural areas of India</li>
                <li>Delegate to the NII&C Summit</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Secondary and Senior Secondary School</CardTitle>
              <p className="text-sm text-muted-foreground">
                St. Paul's School — 2018 – 2024
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Gained strong foundation in <strong>Programming</strong>,
                <strong> Networking</strong>, and
                <strong> and Communication Skills</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Rank 1 in NCO</li>
                <li>Started my AppD Journey</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Middle School</CardTitle>
              <p className="text-sm text-muted-foreground">
                New Green Field School — 2010 – 2018
              </p>
            </CardHeader>
          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
