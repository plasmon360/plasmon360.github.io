const SOURCES={
  "Modern Robotics textbook": "https://hades.mech.northwestern.edu/index.php/Modern_Robotics",
  "Modern Robotics Chapter 2": "https://modernrobotics.northwestern.edu/chapters/chapter2/",
  "Modern Robotics Chapter 3": "https://modernrobotics.northwestern.edu/chapters/chapter3/",
  "Modern Robotics Chapter 4": "https://modernrobotics.northwestern.edu/chapters/chapter4/",
  "Modern Robotics Chapter 5": "https://modernrobotics.northwestern.edu/chapters/chapter5/",
  "Modern Robotics Chapter 6": "https://modernrobotics.northwestern.edu/chapters/chapter6/",
  "Modern Robotics Chapter 8": "https://modernrobotics.northwestern.edu/chapters/chapter8/",
  "Modern Robotics Chapter 9": "https://modernrobotics.northwestern.edu/chapters/chapter9/",
  "Modern Robotics Chapter 10": "https://modernrobotics.northwestern.edu/chapters/chapter10/",
  "Modern Robotics Chapter 11": "https://modernrobotics.northwestern.edu/chapters/chapter11/",
  "MIT Robotics": "https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/",
  "MIT Robotics Chapter 1": "https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/resources/chapter1/",
  "MIT Underactuated Robotics": "https://underactuated.mit.edu/",
  "ROS 2 tutorials": "https://docs.ros.org/en/rolling/Tutorials.html",
  "ROS 2 URDF": "https://docs.ros.org/en/rolling/Tutorials/Intermediate/URDF/URDF-Main.html",
  "MoveIt 2": "https://moveit.picknik.ai/main/doc/tutorials/tutorials.html",
  "MuJoCo": "https://mujoco.readthedocs.io/en/stable/overview.html",
  "Gymnasium": "https://gymnasium.farama.org/",
  "OpenCV": "https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html",
  "PyTorch": "https://docs.pytorch.org/tutorials/",
  "LeRobot": "https://huggingface.co/docs/lerobot/index",
  "LeRobot source": "https://github.com/huggingface/lerobot",
  "SmolVLA": "https://huggingface.co/lerobot/smolvla_base",
  "SO-101 hardware": "https://github.com/TheRobotStudio/SO-ARM100",
  "LeRobot datasets": "https://huggingface.co/datasets?other=LeRobot",
  "NumPy": "https://numpy.org/doc/stable/",
  "Matplotlib animation": "https://matplotlib.org/stable/api/animation_api.html"
};
const COURSE=[
  {
    "week": 1,
    "phase": "Fundamentals",
    "title": "Rigid bodies, DOF and joints",
    "primary": "Modern Robotics Chapter 2",
    "secondary": "MIT Robotics Chapter 1",
    "deliverable": "Two-link arm simulator",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 2,
    "phase": "Fundamentals",
    "title": "Rotation matrices and frames",
    "primary": "Modern Robotics Chapter 3",
    "secondary": "NumPy",
    "deliverable": "3D frame visualizer",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 3,
    "phase": "Fundamentals",
    "title": "Homogeneous transformations",
    "primary": "Modern Robotics Chapter 3",
    "secondary": "NumPy",
    "deliverable": "SE(3) transform library",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 4,
    "phase": "Fundamentals",
    "title": "Forward kinematics",
    "primary": "Modern Robotics Chapter 4",
    "secondary": "Modern Robotics textbook",
    "deliverable": "3D forward kinematics",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 5,
    "phase": "Fundamentals",
    "title": "Inverse kinematics and Jacobians",
    "primary": "Modern Robotics Chapter 6",
    "secondary": "Modern Robotics Chapter 5",
    "deliverable": "Numerical IK solver",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 6,
    "phase": "Fundamentals",
    "title": "MuJoCo simulation",
    "primary": "MuJoCo",
    "secondary": "Modern Robotics Chapter 4",
    "deliverable": "Simulated robot arm",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 7,
    "phase": "Control",
    "title": "Robot dynamics",
    "primary": "Modern Robotics Chapter 8",
    "secondary": "MIT Underactuated Robotics",
    "deliverable": "Two-link dynamics notebook",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 8,
    "phase": "Control",
    "title": "PID and feedback control",
    "primary": "MIT Underactuated Robotics",
    "secondary": "MuJoCo",
    "deliverable": "Joint controller",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 9,
    "phase": "Control",
    "title": "Trajectory generation",
    "primary": "Modern Robotics Chapter 9",
    "secondary": "MuJoCo",
    "deliverable": "Smooth trajectory planner",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 10,
    "phase": "Control",
    "title": "Integrated robot control",
    "primary": "Modern Robotics Chapter 11",
    "secondary": "MIT Underactuated Robotics",
    "deliverable": "Trajectory tracking demo",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 11,
    "phase": "Robotics software",
    "title": "ROS 2 fundamentals",
    "primary": "ROS 2 tutorials",
    "secondary": "ROS 2 URDF",
    "deliverable": "Publisher/subscriber demo",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 12,
    "phase": "Robotics software",
    "title": "ROS 2 Python development",
    "primary": "ROS 2 tutorials",
    "secondary": "MuJoCo",
    "deliverable": "Python robot state node",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 13,
    "phase": "Robotics software",
    "title": "Robot modeling with URDF",
    "primary": "ROS 2 URDF",
    "secondary": "ROS 2 tutorials",
    "deliverable": "Two-link URDF",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 14,
    "phase": "Robotics software",
    "title": "Motion planning",
    "primary": "MoveIt 2",
    "secondary": "ROS 2 tutorials",
    "deliverable": "Simulated pick-and-place",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 15,
    "phase": "Perception",
    "title": "Camera geometry",
    "primary": "OpenCV",
    "secondary": "NumPy",
    "deliverable": "Camera projection notebook",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 16,
    "phase": "Perception",
    "title": "Camera calibration",
    "primary": "OpenCV",
    "secondary": "NumPy",
    "deliverable": "Calibration experiment",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 17,
    "phase": "Perception",
    "title": "Object detection",
    "primary": "OpenCV",
    "secondary": "PyTorch",
    "deliverable": "Block detection",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 18,
    "phase": "Perception",
    "title": "Vision-guided control",
    "primary": "OpenCV",
    "secondary": "MuJoCo",
    "deliverable": "Vision-to-robot transform",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 19,
    "phase": "Robot learning",
    "title": "Robot learning datasets",
    "primary": "LeRobot",
    "secondary": "LeRobot datasets",
    "deliverable": "Dataset schema",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 20,
    "phase": "Robot learning",
    "title": "Behavior cloning",
    "primary": "LeRobot",
    "secondary": "PyTorch",
    "deliverable": "BC baseline",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 21,
    "phase": "Robot learning",
    "title": "Action chunking and ACT",
    "primary": "LeRobot source",
    "secondary": "PyTorch",
    "deliverable": "Action chunking experiment",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 22,
    "phase": "Robot learning",
    "title": "Diffusion policies",
    "primary": "LeRobot source",
    "secondary": "PyTorch",
    "deliverable": "Policy comparison notebook",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 23,
    "phase": "Robot learning",
    "title": "Reinforcement learning",
    "primary": "Gymnasium",
    "secondary": "MIT Underactuated Robotics",
    "deliverable": "RL control agent",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 24,
    "phase": "Embodied AI",
    "title": "Vision-language-action basics",
    "primary": "SmolVLA",
    "secondary": "LeRobot",
    "deliverable": "VLA architecture notes",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 25,
    "phase": "Embodied AI",
    "title": "SmolVLA inference",
    "primary": "SmolVLA",
    "secondary": "LeRobot",
    "deliverable": "Inference notebook",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 26,
    "phase": "Embodied AI",
    "title": "VLA demonstration datasets",
    "primary": "LeRobot datasets",
    "secondary": "LeRobot",
    "deliverable": "Instruction dataset",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 27,
    "phase": "Embodied AI",
    "title": "VLA fine-tuning",
    "primary": "SmolVLA",
    "secondary": "LeRobot",
    "deliverable": "Simulation fine-tuning report",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 28,
    "phase": "Physical robot",
    "title": "SO-101 hardware planning",
    "primary": "SO-101 hardware",
    "secondary": "LeRobot",
    "deliverable": "Budget and safety checklist",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 29,
    "phase": "Physical robot",
    "title": "Assembly and calibration",
    "primary": "SO-101 hardware",
    "secondary": "LeRobot",
    "deliverable": "Calibrated hardware",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 30,
    "phase": "Physical robot",
    "title": "Teleoperation",
    "primary": "LeRobot",
    "secondary": "SO-101 hardware",
    "deliverable": "Teleoperation workflow",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 31,
    "phase": "Physical robot",
    "title": "Collecting demonstrations",
    "primary": "LeRobot",
    "secondary": "LeRobot datasets",
    "deliverable": "Recorded robot dataset",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 32,
    "phase": "Physical robot",
    "title": "Training physical policies",
    "primary": "LeRobot",
    "secondary": "PyTorch",
    "deliverable": "Trained checkpoint",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 33,
    "phase": "Deployment",
    "title": "Robot inference pipeline",
    "primary": "LeRobot",
    "secondary": "SO-101 hardware",
    "deliverable": "Physical policy demo",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 34,
    "phase": "Deployment",
    "title": "Language-conditioned control",
    "primary": "SmolVLA",
    "secondary": "LeRobot",
    "deliverable": "Instruction-following demo",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 35,
    "phase": "Deployment",
    "title": "Evaluation and robustness",
    "primary": "LeRobot",
    "secondary": "PyTorch",
    "deliverable": "Success-rate benchmark",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  },
  {
    "week": 36,
    "phase": "Deployment",
    "title": "Capstone: AI robotic arm",
    "primary": "SmolVLA",
    "secondary": "SO-101 hardware",
    "deliverable": "Final video and project report",
    "days": [
      {
        "title": "Lecture and notes",
        "hours": 1.5,
        "task": "Study the primary resource. Write five key concepts and one question."
      },
      {
        "title": "Reading and derivation",
        "hours": 1.5,
        "task": "Read the secondary resource. Work through one mathematical or conceptual example."
      },
      {
        "title": "Python lab",
        "hours": 2,
        "task": "Implement a small working Python experiment related to this week's topic."
      },
      {
        "title": "Build and test",
        "hours": 2,
        "task": "Extend the lab into the weekly deliverable and add a repeatable test."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Document results, review mistakes, and commit your work."
      }
    ]
  }
];
