// Import the functions to test
import {
    fetchAllExercises,
    fetchExercisesByName,
    fetchExercisesByBodyPart,
    fetchExercisesByTargetMuscle,
    fetchExercisesByEquipment
  } from "../client/utils/exercises-fetch";
  
  describe("Exercise API Functions", () => {
    beforeEach(() => {
      jest.clearAllMocks(); // Reset mocks before each test
    });
  
    beforeAll(() => {
      global.fetch = jest.fn(); // Mock fetch globally
    });
  
    it("fetchAllExercises should return mock data", async () => {
      const mockData = [{ id: 1, name: "Push-Up" }];
      
      fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData)
      });
  
      const result = await fetchAllExercises();
  
      expect(result).toEqual(mockData);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("./exercises", expect.any(Object));
    });
  
    it("fetchExercisesByName should return mock data", async () => {
      const mockData = [{ id: 2, name: "Sit-Up" }];
  
      fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData)
      });
  
      const result = await fetchExercisesByName("sit-up");
  
      expect(result).toEqual(mockData);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("./exercises/name/sit-up", expect.any(Object));
    });
  
    it("fetchExercisesByBodyPart should return mock data", async () => {
      const mockData = [{ id: 3, bodyPart: "waist" }];
  
      fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData)
      });
  
      const result = await fetchExercisesByBodyPart("waist");
  
      expect(result).toEqual(mockData);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("./exercises/bodyParts/waist", expect.any(Object));
    });
  
    it("fetchExercisesByTargetMuscle should return mock data", async () => {
      const mockData = [{ id: 4, targetMuscle: "abs" }];
  
      fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData)
      });
  
      const result = await fetchExercisesByTargetMuscle("abs");
  
      expect(result).toEqual(mockData);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("./exercises/targetMuscles/abs", expect.any(Object));
    });
  
    it("fetchExercisesByEquipment should return mock data", async () => {
      const mockData = [{ id: 5, equipment: "dumbbell" }];
  
      fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData)
      });
  
      const result = await fetchExercisesByEquipment("dumbbell");
  
      expect(result).toEqual(mockData);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("./exercises/equipments/dumbbell", expect.any(Object));
    });
  });
  